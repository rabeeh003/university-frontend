"use client"
import React from "react"
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
import Image from "next/image";
export default function Course() {
  return (
    <main>
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
        <Button variant="ghost"> <AddBook/></Button>
      </SubNav>
      <div className="w-full text-center h-[calc(100vh-200px)] bg-muted mt-3 p-3 rounded-md grid grid-cols sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="flex p-2 h-fit w-full shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg" >
          <Image src="/book.webp" className="max-w-[300px] max-h-[250px] rounded-sm" width={100} height={100} objectFit="cover" alt="book cover" />
          <div className="p-2 ">
          <p className="w-full text-lg font-semibold  rounded">
            Book name
          </p>
          <p className=" w-full text-md rounded">
            auther name
          </p>
          </div>
        </div>
        
      </div>
    </main>
  );
}
