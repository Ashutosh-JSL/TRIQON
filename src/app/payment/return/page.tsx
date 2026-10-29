
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    order_id?: string;
  }>;
};

async function getOrderStatus(orderId: string) {
  const clientId = process.env.CASHFREE_CLIENT_ID;
  const clientSecret = process.env.CASHFREE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return {
      status: "UNKNOWN",
      message: "Payment status could not be checked.",
    };
  }

  try {
    const response = await fetch(
      `https://sandbox.cashfree.com/pg/orders/${encodeURIComponent(orderId)}`,
      {
        method: "GET",
        headers: {
          "x-client-id": clientId,
          "x-client-secret": clientSecret,
          "x-api-version": "2025-01-01",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Cashfree status request failed:", response.status);

      return {
        status: "UNKNOWN",
        message: "We could not verify your payment yet.",
      };
    }

    const data = await response.json();

    return {
      status: String(data.order_status || "UNKNOWN"),
      message: "",
    };
  } catch (error) {
    console.error("Payment verification error:", error);

    return {
      status: "UNKNOWN",
      message: "Unable to verify payment. Please try again later.",
    };
  }
}

export default async function PaymentReturnPage({ searchParams }: Props) {
  const { order_id: orderId } = await searchParams;

  let payment = {
    status: "UNKNOWN",
    message: "Missing or invalid order ID.",
  };

  if (orderId && /^tq_[a-f0-9]{32}$/.test(orderId)) {
    payment = await getOrderStatus(orderId);

    if (payment.status === "PAID") {
      payment.message = "Your payment has been received successfully.";
    } else if (
      payment.status === "ACTIVE" ||
      payment.status === "PENDING"
    ) {
      payment.message =
        "Your payment is still being processed. Please check again shortly.";
    } else if (payment.status !== "UNKNOWN") {
      payment.message =
        "The payment is not confirmed as successful. Please check the status before trying again.";
    }
  }

  const paid = payment.status === "PAID";
  const pending =
    payment.status === "ACTIVE" ||
    payment.status === "PENDING" ||
    payment.status === "UNKNOWN";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-4 py-12 text-white">
      <section className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center shadow-2xl sm:p-10">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
            paid
              ? "bg-emerald-400/10 text-emerald-400"
              : pending
              ? "bg-amber-400/10 text-amber-300"
              : "bg-red-400/10 text-red-400"
          }`}
        >
          {paid ? "✓" : pending ? "…" : "!"}
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          GrowZeal
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          {paid
            ? "Payment Successful"
            : pending
            ? "Payment Pending"
            : "Payment Not Confirmed"}
        </h1>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          {payment.message}
        </p>

        {orderId && (
          <div className="mt-7 rounded-xl border border-white/10 bg-[#0b1728] p-4 text-left">
            <p className="text-xs text-slate-500">Order ID</p>
            <p className="mt-2 break-all text-sm text-slate-200">
              {orderId}
            </p>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-xs text-slate-500">Order Status</p>
              <p className="mt-1 font-semibold text-cyan-300">
                {payment.status}
              </p>
            </div>
          </div>
        )}

        <div className="mt-7 flex flex-col gap-3">
          <Link
            href="/"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-[#07111f] transition hover:bg-cyan-300"
          >
            Return to Home
          </Link>

          <Link
            href="/apply/web-development"
            className="rounded-xl border border-white/10 px-5 py-3 font-medium text-slate-200 transition hover:bg-white/5"
          >
            Back to Web Development
          </Link>
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          Please retain your order ID for reference. An unverified or
          pending payment should not be treated as a completed registration.
        </p>
      </section>
    </main>
  );
}
