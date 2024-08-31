import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course",
  description: "Course, Department, Class, and Silabus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
        {children}
    </div>
  );
}
