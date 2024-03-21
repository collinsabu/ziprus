import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import DeleteButton from './DeleteButton'

export const dynamicParams = true

export async function generateMetadata({ params }) {
   const supabase = createServerComponentClient({ cookies })
 
   const { data: order } = await supabase.from('orders')
     .select()
     .eq('id', params.id)
     .single()
  
   return {
     title: `ziprus Helpdesk | ${order?.name || 'Ticket not Found'}`
   }
 }
 async function getOrder(id) {

   const supabase = createServerComponentClient({ cookies })

   const { data } = await supabase.from('orders')
     .select()
     .eq('id', id)
     .single()
 
     if (!data) {
       notFound()
     }
   
     return data
 }

 export default async function OrderDetails({ params }) {
   const order = await getOrder(params.id)

  return (
   <main className=" bg-base_color mb-20 pb-11">
   <div className="w-[50%] mx-auto border-4 border-white py-10 text-black bg-base_text px-5 rounded-[50px] ">
     <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 "> <span className='font-bold text-white'>Customer Name:</span> {order.name}</h5>
     <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 "> <span className='font-bold text-white'>Company Name:</span> {order.company}</h5>
     <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 "> <span className='font-bold text-white'>Email:</span> {order.email}</h5>
     <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 "> <span className='font-bold text-white'>Factory Address:</span> {order.supply}</h5>
     <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 "><span className='font-bold text-white'>Phone Number: </span> {order.number}</h5>
     <h5 className="text-2xl my-4 font-semibold border-b-2 border-b-black pb-1 "> <span className='font-bold text-white'>Material:</span> {order.material}</h5>
     <p className="text-xl my-4 font-semibold border-b-2 border-b-black pb-1 "> <span className='font-bold text-white'>Message:</span> {order.body}</p>
     <div className='flex justify-center'><DeleteButton id = {order.id}/></div>

   </div>
   
   </main>
  )
}
