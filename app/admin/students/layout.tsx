import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Students",
  description: "Students list page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
        {children}
    </div>
  );
}
