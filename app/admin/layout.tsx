import AdminSidebar from "@/components/admin/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JC admin",
  description: "Junior college admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
