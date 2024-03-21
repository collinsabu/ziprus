"use client"

// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoggoutButton from './LoggoutButton'



const navLinks = [
   { name: "Contacts", href: "/admin/contactlist" },
   { name: "Orders", href: "/admin" },
 ];

export default function AdminHeader( {user}) {
   const pathname = usePathname();
  return (
   <div className="menu-bar bg-base_color h-20 flex  items-center justify-between px-20 mt-2">
     <div><h1 className=" admin-nav text-white text-xl">Admin Dashboard</h1></div>
   <nav className="nav_links">
     {navLinks.map((link) => {
       const isActive = pathname.startsWith(link.href);
       return (
         <Link
           href={link.href}
           className={
             isActive
               ? "text-white mx-5 text-lg tracking-wide"
               : "text-base_text mx-5 text-lg tracking-wide"
           }
           key={link.name}
         >
           {link.name}
         </Link>
       );
     })}
   </nav>

   <div>
      <h1 className="text-white text-xl">{user && <span>Hello, {user.email}</span>}</h1>
   </div>
   <div> <LoggoutButton /></div>
 </div>
  )
}
