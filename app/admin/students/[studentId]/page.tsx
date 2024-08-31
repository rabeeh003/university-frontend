import React from "react"
import Image from "next/image";

export default function Course() {
  return (
    <main>
      <div className=" bg-muted mt-3 p-3 rounded-md grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 grid justify-center">
          <Image src="/book.webp" className="m-auto max-w-[300px] max-h-[250px] rounded-sm" width={100} height={100} objectFit="cover" alt="book cover" />
          <h2 className="font-mono text-xl">Muhammed Rabeeh PK</h2>
        </div>
        <div className="col-span-12  sm:col-span-6">
          <h2>Analize</h2>
        </div>
      </div>
    </main>
  );
}
