import React from "react"
import SubNav from "@/components/admin/SubNav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Locate, Mail, MapPinned, Phone, PlusIcon, SlashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AddCollege } from "@/components/admin/college/AddCollege";
import { cookies } from "next/headers";
import { baseURL } from "@/utils/constValue";

export default async function Course() {
  const token = cookies().get("admin")?.value;
  const res = await fetch(`${baseURL}account/colleges/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    console.error('Failed to fetch data:', res.statusText);
    return <div>Error fetching data</div>;
  }


  const jsonData = await res.json();
  console.log(jsonData, "responce of data");
  const data = jsonData.results;

  console.log(data, 'data');
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
        <Button variant="ghost"> <AddCollege /></Button>
      </SubNav>
      <div className="w-full text-center h-[calc(100vh-200px)] bg-muted mt-3 p-3 rounded-md grid grid-cols sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data?.map((college: any) => (
          <div className="p-2 h-fit w-full shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
            <div key={college.id} className="flex" >
              <Image src={college.profile ? college.profile : `/book.webp`} className=" w-[100px] h-[100px] rounded-tl-2xl p-2 bg-white" width={100} height={100} objectFit="cover" alt="book cover" />
              <div className="p-2 text-start ">
                <p className="w-full text-lg font-semibold  rounded">
                  {college.user.first_name}
                </p>
                <p className="w-full text-sm rounded flex"><MapPinned size={15} className="my-auto me-2"/> {college.place} </p>
              </div>
            </div>
            <div className="w-full text-start p-2">
              <p className="w-full text-sm rounded flex"> <Phone size={15} className="my-auto me-2"/> {college.phone} </p>
              <p className="w-full text-sm rounded flex"> <Mail size={15} className="my-auto me-2"/> {college.user.email} </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
