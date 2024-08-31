"use client";

import AdminSidebar from "@/components/college/Sidebar";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchAdminData } from "@/lib/redux/reduceres/admin";
import { fetchCollegeData } from "@/lib/redux/reduceres/college";
import { RootState } from "@/lib/redux/store";
import { getCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const dispatch = useAppDispatch();
  const cooki = getCookie("college");
  const { profile, name, username, loading, error } = useAppSelector(
    (state: RootState) => state.college
  );
  const router = useRouter();

  useEffect(() => {
    if (!cooki) {
      router.push("/auth/college");
    } else if (cooki) {
      console.log("feching data again");
      dispatch(fetchCollegeData());
    }
  }, [dispatch, cooki]);

  if (username) return (
    <main className="h-screen flex flex-col md:flex-row p-2 md:p-5 lg:p-10">
      <aside className="w-full h-full flex justify-center items-center align-middle md:max-w-[250px] md:me-5">
        <AdminSidebar />
      </aside>
      <div className="w-full h-fullflex items-center justify-center md:justify-start">
        <div className="w-full h-full overflow-y-scroll scrollbar-hide relative rounded-md">
          {loading ? (
            <p className="text-center justify-center">Loading...</p>
          ) : (
            <div className="h-full w-full">
              {children}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
