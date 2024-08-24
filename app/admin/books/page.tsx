import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import { baseURL } from "@/utils/constValue";

interface Book {
  id: string;
  coverImage?: string;
  name?: string;
  author?: string;
}

export default async function Course() {
  const token = cookies().get("admin")?.value;
  const res = await fetch(`${baseURL}education/subjects/`, {
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
  const data: Book[] = jsonData.results;

  console.log(data, 'data');
  
  return (
    <main className="w-full text-center h-[calc(100vh-200px)] overflow-y-auto bg-muted mt-3 p-3 rounded-md grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((book) => (
        <div
          key={book.id}
          className="flex p-2 h-fit w-full shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <Image
            src={book.coverImage || "/book.webp"}
            className="max-w-[300px] max-h-[250px] rounded-sm"
            width={100}
            height={100}
            objectFit="cover"
            alt={book.name || "Book cover"}
          />
          <div className="p-2 text-left">
            <p className="w-full text-lg font-semibold rounded">
              {book.name }
            </p>
            <p className="w-full text-md rounded">
              {book.author} 
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
