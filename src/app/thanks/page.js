"use client";

import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function page() {
  return (
    <main className="poppins bg-base_color mt-6 mb-20">
      <div className=" w-[60%] mx-auto mt flex flex-col items-center justify-center h-[550px]">
        <h1 className=" text-7xl  text-base_text  mb-6">Thank You</h1>
        <p className="text-white text-3xl">
          Your Order was completed successfully.
        </p>
        <div className="text-white flex gap-6 mt-3">
          <RiCustomerService2Fill className="text-3xl" />
          <p className="text-xl ">
            Our sales team will get in touch with you shortly.
          </p>
        </div>
     
        <Link
   
          href='http://localhost:3000/'
          className="text-white bg-base_color border-2 px-14 py-3 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 mt-4"
        >
          Home Page
        </Link>
      </div>
    </main>
  );
}
