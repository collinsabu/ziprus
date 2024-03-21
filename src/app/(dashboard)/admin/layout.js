
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import AdminHeader from "@/app/components/AdminHeader";


export default async function layout( {children}) {

   const supabase = createServerComponentClient({ cookies })
   const { data } = await supabase.auth.getSession()
 
   if (!data.session) {
     redirect('/login')
   }
  return (
    <>
    <AdminHeader user={data.session.user}/>
    {children}
    </>
  )
}
