"use client"
import React from "react"
import SubNav from "@/components/admin/SubNav";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <main>
      <SubNav title="Dashboard" breadcrumb={
        ""
      }>
        <input
          type="text"
          placeholder="Search students..."
          className="px-4 py-2 border rounded-lg"
        />
      </SubNav>
      <aside className="w-full bg-muted mt-3 p-3 rounded-md">
        <section className="flex">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow dark:shadow-lg dark:border dark:border-gray-700"
          />
        </section>
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow dark:shadow-lg dark:border dark:border-gray-700"
          />
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow dark:shadow-lg dark:border dark:border-gray-700"
          />
      </aside>
    </main>
  );
}
