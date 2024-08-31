"use client";

import AdminSidebar from "@/components/admin/Sidebar";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchAdminData } from "@/lib/redux/reduceres/admin";
import { RootState } from "@/lib/redux/store";
import { getCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation"; // Correct hook for client components in Next.js 13+
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const dispatch = useAppDispatch();
  const cooki = getCookie("admin");
  const { profile, name, username, loading, error } = useAppSelector(
    (state: RootState) => state.admin
  );
  const router = useRouter();

  useEffect(() => {
    if (!cooki) {
      router.push("/auth/admin");
    } else if (cooki) {
      console.log("feching data again");
      dispatch(fetchAdminData());
    }
  }, [dispatch, cooki]);

  useEffect(() => {
    if (error) {
      router.push("/auth/admin");
    }
  }, [error, router]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (username) return (
    <main className="h-screen flex flex-col md:flex-row p-2 md:p-5 lg:p-10">
      <aside className="sticky top-0 z-50  w-full mb-2 md:mb-0 md:h-full md:flex justify-center items-center align-middle md:max-w-[250px] md:me-5">
        <AdminSidebar />
      </aside>
      <div className="w-full h-full flex items-center justify-center md:justify-start">
        <div className="w-full h-full overflow-y-scroll scrollbar-hide relative rounded-md">
          {children}
        </div>
      </div>
    </main>
  );
}
