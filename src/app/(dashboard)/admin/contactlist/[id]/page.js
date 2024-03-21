import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import DeleteButton from './DeleteButton'


/* import DeleteButton from './DeleteButton' */

export const dynamicParams = true

export async function generateMetadata({ params }) {
   const supabase = createServerComponentClient({ cookies })
 
   const { data: order } = await supabase.from('contacts')
     .select()
     .eq('id', params.id)
     .single()
  
   return {
     title: `ziprus Helpdesk | ${order?.name || ' Contact ticket not Found'}`
   }
 }
 async function getContacts(id) {

   const supabase = createServerComponentClient({ cookies })

   const { data } = await supabase.from('contacts')
     .select()
     .eq('id', id)
     .single()
 
     if (!data) {
       notFound()
     }
   
     return data
 }

 export default async function ContactDetails({ params }) {
   const contact = await getContacts(params.id)

 
   return (
     <main className=" bg-base_color mb-20 pb-11">
       <div className="w-[50%] mx-auto border-4 border-white py-10 text-black bg-base_text px-5 rounded-[50px]">
         <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 ">
           <span className="font-bold text-white">Full Name: </span> {contact.fullname}
         </h5>
         <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 ">
            <span className="font-bold text-white"> Contact Address:  </span> {contact.email}
         </h5>
         <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 ">
           <span className="font-bold text-white"> Phone Number: </span> {contact.phonenumber}
         </h5>
         <p className="text-xl my-4 font-semibold border-b-2 border-b-black pb-1 ">
            <span className="font-bold text-white">Message: </span> {contact.message}
         </p>
         <div className='flex justify-center'><DeleteButton id = {contact.id}/></div>


       </div>
     </main>
   );
 }
 