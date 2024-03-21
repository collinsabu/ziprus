import React from "react";
import Image from "next/image";

import img from "./img.jpg";

export default function Testimonial() {
  return (
    <section className="bg-base_color mt-10 mb-10 sm:mb-16 poppins">
      <div className="container w-3/4 mx-auto sm:flex">
        <div className="sm:w-6/12 bg-black">
          <Image src={img} class="img-container" />
        </div>

        <div className="sm:w-6/12 sm:p-14 text-center py-10">
          <h2 className="text-white text-xl mb-10"> What our Client Say</h2>
          <p className="text-left text-white text-sm font-extralight mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            nesciunt cum ea consequatur est provident veritatis iste tenetur
            quibusdam. Nam alias aperiam iusto numquam doloremque similique
            illo, pariatur nemo odio eaque et adipisci iste sequi modi
            doloribus. Non, vitae amet?illo, pariatur nemo odio eaque et
          
            <br />
            <br />
            quibusdam. Nam alias aperiam iusto numquam doloremque similique
            illo, pariatur nemo odio eaque et adipisci iste sequi modi
           

          </p>
          <p className="text-base_text font-medium mb-2">Garry Paul</p>
          <p className="text-white text-sm font-extralight mb-1">Kobac Paint Industries</p>
          <p className="text-white text-sm font-extralight mb-5">Md/Ceo</p>
        </div>
      </div>
    </section>
  );
}
