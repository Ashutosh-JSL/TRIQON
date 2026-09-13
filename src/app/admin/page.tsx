"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Student = {
  id: number;
  full_name: string;
  email: string;
  mobile: string;
  college: string;
  branch: string | null;
  year_of_study: string | null;
  area_of_interest: string | null;
  remarks: string | null;
  status: string | null;
  created_at: string | null;
};

export default function AdminPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    setLoading(true);
    setError("");

    const supabase = createClient();

    const { data, error } = await supabase
      .from("student_registrations")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("SUPABASE DATA:", data);
    console.log("SUPABASE ERROR:", error);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setStudents((data as Student[]) || []);
    setLoading(false);
  }

  const totalStudents = students.length;

  const newStudents = students.filter(
    (student) => student.status === "New"
  ).length;

  const interviewStudents = students.filter(
    (student) => student.status === "Interview"
  ).length;

  const selectedStudents = students.filter(
    (student) => student.status === "Selected"
  ).length;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F5FF]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#EDE9FE] border-t-[#6D4AFF]" />

          <p className="mt-4 text-sm font-semibold text-gray-600">
            Loading registrations...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#F7F5FF] p-6">
        <div className="mx-auto max-w-4xl pt-10">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h1 className="text-xl font-black text-red-700">
              Database Error
            </h1>

            <p className="mt-3 text-sm text-red-600">
              {error}
            </p>

            <button
              onClick={loadStudents}
              className="mt-5 rounded-xl bg-[#6D4AFF] px-5 py-3 text-sm font-bold text-white hover:bg-[#4C2FBF]"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5FF]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-[#171321]">
              TRIQON<span className="text-[#6D4AFF]">.</span>
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Admin Dashboard
            </p>
          </div>

          <div className="rounded-full bg-[#EDE9FE] px-4 py-2">
            <span className="text-sm font-bold text-[#4C2FBF]">
              Admin
            </span>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-[#171321]">
            Student Registrations
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Manage applications submitted through the TRIQON website.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              Total Registrations
            </p>

            <p className="mt-3 text-3xl font-black text-[#6D4AFF]">
              {totalStudents}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              New
            </p>

            <p className="mt-3 text-3xl font-black text-gray-900">
              {newStudents}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              Interview
            </p>

            <p className="mt-3 text-3xl font-black text-gray-900">
              {interviewStudents}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              Selected
            </p>

            <p className="mt-3 text-3xl font-black text-gray-900">
              {selectedStudents}
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-5">
            <h3 className="text-xl font-black text-[#171321]">
              Applications
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {totalStudents} registration
              {totalStudents !== 1 ? "s" : ""} found
            </p>
          </div>

          {students.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <h4 className="text-lg font-bold text-gray-900">
                No registrations found
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Your Supabase table currently has no records.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[1200px] w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Name
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Email
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Mobile
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      College
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Branch
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Year
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Interest
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase text-gray-500">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {students.map((student) => (
                    <tr
                      key={student.id}
                      className="transition hover:bg-[#F7F5FF]"
                    >
                      <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                        {student.full_name}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {student.email}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {student.mobile}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {student.college}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {student.branch || "-"}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {student.year_of_study || "-"}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {student.area_of_interest || "-"}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-bold text-[#4C2FBF]">
                          {student.status || "New"}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-500">
                        {student.created_at
                          ? new Date(
                              student.created_at
                            ).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}