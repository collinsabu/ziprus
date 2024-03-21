import Link from "next/link";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function getList() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("contacts")
  .select();

  if (error) {
    console.log(error.message);
  }

  return data;
}

export default async function Contacts() {
  const contacts = await getList();

  return (
    <main className=" bg-base_color py-10 mb-20 mt-5 ">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="w-[50%] bg-base_text mb-6 mx-auto h-16 flex justify-center  flex-col pl-5 "
        >
          <Link href={`/admin/contactlist/${contact.id}`}>
            <h5 className="text-xl font-semibold ">{contact.fullname}</h5>
            <div>{contact.email}</div>
          </Link>
        </div>
      ))}
    </main>
  );
}
