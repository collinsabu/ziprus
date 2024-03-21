"use client";

import { useState } from "react";



export default function AuthForm({ handleSubmit}) {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  return (
    <main className="poppins">
      <form className=" flex flex-col justify-center text-white" onSubmit={(e) => handleSubmit(e, email, password)}>
        <div className="email mx-auto">
          <div>Email</div>
          <input type="email" className=" w-80 h-9 text-black"  required  onChange={(e) => setEmail(e.target.value)}
          value={email}/>
        </div>

        <div className="mx-auto mt-8">
          <div>Password</div>
          <input type="password" className=" w-80 h-9 text-black" required onChange ={(e) => setPassword(e.target.value)}
          value={password}/>
        </div>
        <div className="mx-auto"><button  className="text-white bg-base_text border-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 px-10 py-2 mt-6">Login</button></div>
        
      </form>
    </main>
  );
}
