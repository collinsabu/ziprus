import { Suspense } from "react";
import Contacts from "./ContactList"
import Loading from "../loading";


export default function ContactList() {

  

  
  return (
   <div>
   <Suspense fallback={<Loading />}>
     <Contacts />
   </Suspense>
 </div>
  );
}
