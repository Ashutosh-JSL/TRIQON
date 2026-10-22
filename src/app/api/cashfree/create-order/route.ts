
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // 1. Read Cashfree credentials from the server environment
    const clientId = process.env.CASHFREE_CLIENT_ID;
    const clientSecret = process.env.CASHFREE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        {
          error:
            "Cashfree credentials are missing. Check your .env.local file.",
        },
        { status: 500 }
      );
    }

    // 2. Read and validate student details
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const college = String(body.college ?? "").trim();

    if (!name || !email || !phone || !college) {
      return NextResponse.json(
        { error: "Please provide all required student details." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        {
          error: "Please enter a valid 10-digit Indian mobile number.",
        },
        { status: 400 }
      );
    }

    // 3. Read website URL
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!siteUrl) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_SITE_URL is missing in .env.local." },
        { status: 500 }
      );
    }

    // 4. Generate unique IDs for this order and customer
    const orderId = `tq_${randomUUID().replace(/-/g, "")}`;
    const customerId = `student_${randomUUID().replace(/-/g, "")}`;

    // 5. Create an order with Cashfree Sandbox
    const cashfreeResponse = await fetch(
      "https://sandbox.cashfree.com/pg/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2025-01-01",
          "x-client-id": clientId,
          "x-client-secret": clientSecret,
        },
        body: JSON.stringify({
          order_id: orderId,
          order_amount: 499,
          order_currency: "INR",

          customer_details: {
            customer_id: customerId,
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
          },

          order_note: `TriQolo Web Development application - ${college}`,

          order_meta: {
            return_url: `${siteUrl.replace(/\/+$/, "")}/payment/return?order_id=${orderId}`,
          },
        }),
        cache: "no-store",
      }
    );

    // 6. Read Cashfree response safely
    const responseText = await cashfreeResponse.text();

    let cashfreeData: {
      payment_session_id?: string;
      order_id?: string;
      message?: string;
      type?: string;
    };

    try {
      cashfreeData = JSON.parse(responseText);
    } catch {
      console.error(
        "Cashfree returned a non-JSON response. HTTP status:",
        cashfreeResponse.status
      );

      return NextResponse.json(
        {
          error:
            "Cashfree returned an unexpected response. Please try again.",
        },
        { status: 502 }
      );
    }

    // 7. Handle Cashfree API errors
    if (!cashfreeResponse.ok) {
      console.error("Cashfree order creation failed:", {
        status: cashfreeResponse.status,
        type: cashfreeData.type,
        message: cashfreeData.message,
      });

      return NextResponse.json(
        {
          error:
            cashfreeData.message ||
            "Cashfree could not create the payment order. Check your Sandbox credentials.",
        },
        { status: 502 }
      );
    }

    // 8. Confirm Cashfree returned a payment session
    if (!cashfreeData.payment_session_id) {
      console.error(
        "Cashfree response did not contain a payment_session_id."
      );

      return NextResponse.json(
        {
          error: "Cashfree did not return a payment session.",
        },
        { status: 502 }
      );
    }

    // 9. Return JSON to the frontend
    return NextResponse.json({
      success: true,
      orderId: cashfreeData.order_id || orderId,
      paymentSessionId: cashfreeData.payment_session_id,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return NextResponse.json(
      {
        error: "Unable to create payment order. Please try again.",
      },
      { status: 500 }
    );
  }
}
