"use client"
import React from "react"
import SubNav from "@/components/admin/SubNav";
import { Calendar } from "@/components/ui/calendar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <main>
      <SubNav title="Dashboard" breadcrumb={
        <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      }>
        <input
          type="text"
          placeholder="Search students..."
          className="px-4 py-2 border rounded-lg"
        />
      </SubNav>
      <div className="w-full bg-muted flex mt-3 p-3 rounded-md">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow dark:shadow-lg dark:border dark:border-gray-700"
        />
      </div>
    </main>
  );
}
