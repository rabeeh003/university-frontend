import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colleges",
  description: "College management page",
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
