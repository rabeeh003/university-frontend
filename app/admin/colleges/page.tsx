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
import Image from "next/image";
import { AddCollege } from "@/components/admin/college/AddCollege";
export default function Course() {
  return (
    <main>
      <SubNav title="Colleges" breadcrumb={
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/colleges">Colleges</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }>
        <Button variant="ghost"> <AddCollege/></Button>
      </SubNav>
      <div className="w-full text-center h-[calc(100vh-200px)] bg-muted mt-3 p-3 rounded-md grid grid-cols sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="flex p-2 h-fit w-full shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg" >
          <Image src="/book.webp" className="max-w-[300px] max-h-[250px] rounded-sm" width={100} height={100} objectFit="cover" alt="book cover" />
          <div className="p-2 text-start ">
          <p className="w-full text-lg font-semibold  rounded">
            Jamia mahiriyya islamic college
          </p>
          <p className=" w-full text-md rounded">
            place : ramanattukara
          </p>
          </div>
        </div>
        
      </div>
    </main>
  );
}
