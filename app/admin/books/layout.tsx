"use client";
import SubNav from "@/components/admin/SubNav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PlusIcon, SlashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddBook } from "@/components/admin/book/AddBook";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex items-center justify-center md:justify-start">
      <div className="max-h-[90vh] h-full w-[97%]">
        <SubNav title="Books" breadcrumb={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/books">Books</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }>
          <Button variant="ghost"> <AddBook /></Button>
        </SubNav>
        {children}
      </div>
    </div>
  );
}
