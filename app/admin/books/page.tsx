import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import { baseURL } from "@/utils/constValue";

// Define TypeScript interfaces for the data
interface Book {
  id: string;
  coverImage?: string;
  name?: string;
  author?: string;
}

export default async function Course() {
  const token = cookies().get("admin")?.value;

  // Fetch data from the API with authorization header
  const res = await fetch(`${baseURL}/education/subjects/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  // Check for response validity
  if (!res.ok) {
    console.error('Failed to fetch data:', res.statusText);
    return <div>Error fetching data</div>;
  }

  // Parse the response JSON
  const data: Book[] = await res.json();
  console.log(data, 'data');
  

  // Map over the data and render it
  return (
    <main className="w-full text-center h-[calc(100vh-200px)] overflow-y-auto bg-muted mt-3 p-3 rounded-md grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((book) => (
        <div
          key={book.id} // Ensure you have a unique id or identifier in your data
          className="flex p-2 h-fit w-full shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <Image
            src={book.coverImage || "/book.webp"} // Adjust based on actual field
            className="max-w-[300px] max-h-[250px] rounded-sm"
            width={100}
            height={100}
            objectFit="cover"
            alt={book.name || "Book cover"} // Adjust based on actual field
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
