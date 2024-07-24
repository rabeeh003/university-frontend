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
    <div className="w-full h-full flex items-center justify-center md:justify-start">
      <div className="max-h-[90vh] h-full w-[97%]">
        {children}
      </div>
    </div>
  );
}
