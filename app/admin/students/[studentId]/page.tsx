import React from "react"
import Image from "next/image";

export default function Course() {
  return (
    <main>
      
      <div className="w-full text-center h-[calc(100vh-200px)] bg-muted mt-3 p-3 rounded-md grid grid-cols sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="flex p-2 h-fit w-full shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg" >
          <Image src="/book.webp" className="max-w-[300px] max-h-[250px] rounded-sm" width={100} height={100} objectFit="cover" alt="book cover" />
          <div className="p-2 text-start ">
            <p className="w-full text-lg font-semibold  rounded">
              Muhammed rabeeh pk
            </p>
            <p className=" w-full text-md rounded">
              College : Jmic
            </p>
            <p className=" w-full text-md rounded">
              Batch   : 2016
            </p>
            <p className=" w-full text-md rounded">
              Std     : 8th
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
