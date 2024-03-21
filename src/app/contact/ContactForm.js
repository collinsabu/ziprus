"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function () {
   const router = useRouter();

   const [fullname, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [phonenumber, setPhoneNumber] = useState(null);
   const [message, setMessage] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e) => {

      e.preventDefault();
      setIsLoading(true);
  
      const newContact = { fullname, email, phonenumber, message };
  
      const res = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });
  
      const json = await res.json();
  
      if (json.error) {
        console.log(error.message);
      }
      if (json.data) {
        router.refresh();
        router.push("/thanks/contact");
      }

    
    };
  return (
    <form onSubmit={handleSubmit}>
    <div className="my-4 sm:block flex flex-col items-center">
      <label className="block text-sm font-extralight">
        Enter FullName
      </label>
      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        value={fullname}
        className="w-2/3 h-8 text-black"
      />
    </div>

    <div className="my-4 sm:block flex flex-col items-center">
      <label className="block text-sm font-extralight">
        Email Address
      </label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-2/3 h-8 text-black"
      />
    </div>

    <div className="my-4 sm:block flex flex-col items-center">
      <label className="block text-sm font-extralight">
        Phone Number
      </label>
      <input
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phonenumber}
        className="w-2/3 h-8 text-black"
      />
    </div>

    <div className="my-4 sm:block flex flex-col items-center">
      <label className="block text-sm font-extralight">Message</label>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="w-2/3 h-24 text-black"
      />
    </div>

    <div  className="my-4 sm:block flex sm:ml-14 justify-center">
    <button
      type="submit"
      disabled={isLoading}
      className="text-white bg-base_color w-36  border-2 py-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 "
    >
      {isLoading && <span>Submitting...</span>}
      {!isLoading && <span>Submit</span>}
    </button>
    </div>


  </form>
  )
}
