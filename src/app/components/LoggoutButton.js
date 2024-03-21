"use client"
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signOut()

    if (!error) {
      router.push('/login')
    }
  }

  return (
    <button className="text-white bg-base_text  px-7 py-2  cursor-pointer hover:bg-lime-950 ease-in-out duration-300" onClick={handleLogout} >
      Logout
    </button>
  )
}