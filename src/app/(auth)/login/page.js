"use client"
import Link from "next/link"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"


// components
import AuthForm from "../AuthForm"




export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/admin')
    } 

  }
[]
  return (
    <section className="bg-base_color h-[600px] poppins mt-5 mb-16">
      <div className="w-2/5  mx-auto h-full flex flex-col justify-center">
        <h1 className="text-3xl font-normal text-center mb-10 text-white">Login</h1>
        <AuthForm handleSubmit = {handleSubmit}/>
        {error && (
        <div className="text-red-500 text-center my-3">{error}</div>
      )}
        <div className="text-center mt-4 text-base_text">Please recover your <Link href="">password here</Link></div>
      </div>
    </section>
  );
}
