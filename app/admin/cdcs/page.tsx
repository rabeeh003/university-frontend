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
import { CreateCourse } from "@/components/admin/course/CreateCourse";
import { CreateDepartment } from "@/components/admin/course/CreateDepartment";
import { CreateSem } from "@/components/admin/course/CreateSem";
import { Button } from "@/components/ui/button";

export default function Course() {
  return (
    <main>
      <SubNav title="Course" breadcrumb={
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/cdcs">Course</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }>
        <div></div>
      </SubNav>
      <div className="w-full h-[calc(100vh-200px)] bg-muted mt-3 p-3 rounded-md grid grid-cols-12  gap-4">
        <section className="bg-background col-span-12 md:col-span-4 xl:col-span-3 p-4 rounded-lg shadow-md">
          <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Courses</h2>
            <div className="px-2 py-1 rounded-lg">
            <CreateCourse/>
            </div>
          </div>
        </section>

        <section className="bg-background p-4 col-span-12 md:col-span-5 xl:col-span-3 rounded-lg shadow-md">
          <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Departments</h2>
            <div className="px-2 py-1 rounded-lg">
              <CreateDepartment/>
            </div>
          </div>
          {/* <ComboboxDemo/> */}
        </section>

        <section className="bg-background p-4 col-span-12 md:col-span-3 xl:col-span-2 rounded-lg shadow-md">
          <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Sem</h2>
            <button className="px-2 py-1 rounded-lg">
              <CreateSem />
            </button>
          </div>
        </section>

        <section className="bg-background p-4 col-span-12 md:col-span-12 xl:col-span-4 rounded-lg shadow-md">
        <div className="flex justify-between pb-2 border-b-2">
            <h2 className="text-xl font-bold">Syllabus</h2>
            <button className="px-2 py-1 rounded-lg">
              <PlusIcon/>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
