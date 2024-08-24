"use client";

import AdminSidebar from "@/components/admin/Sidebar";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchAdminData } from "@/lib/redux/reduceres/admin";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation"; // Correct hook for client components in Next.js 13+
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const dispatch = useAppDispatch();
  const { profile, name, username, loading, error } = useAppSelector(
    (state: RootState) => state.admin
  );
  const router = useRouter();

  useEffect(() => {
    console.log("feching data again");
    dispatch(fetchAdminData());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      router.push("/auth/admin");
    }
  }, [error, router]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (username) return (
    <main className="h-screen flex flex-col md:flex-row">
      <aside className="w-full h-screen p-4 flex justify-center items-center align-middle md:max-w-[300px]">
        <AdminSidebar />
      </aside>
      <div className="w-full h-full flex items-center justify-center md:justify-start">
        <div className="max-h-[90vh] h-full w-[99%]">
          {children}
        </div>
      </div>
    </main>
  );
}
