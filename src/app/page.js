import Image from "next/image";

//import from react icons
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCurrencyNaira } from "react-icons/tb";

import Banner1 from "./banner1.jpg";
import Banner3 from "./images/img2.jpg";
import Banner4 from "./images/img3.jpg";
import Banner5 from "./images/img4.jpg";
import Banner6 from "./images/img5.jpg";
import Banner7 from "./images/img6.jpg";
import Banner8 from "./images/img7.jpg";
import OrderForm from "./OrderForm";

export default async function Home() {
  return (
    <main className="z-0">
      <section className="banner-container poppins">
        <div className=" banner ">
          <Image className="img-container" src={Banner1} alt="Description" />
        </div>
      </section>

      <section className="mt-2 mb-12 bg-base_color  h-72  hidden sm:block ">
        <div className=" w-4/5  mx-auto h-full flex ">
          <div className="card w-2/6  text-white flex flex-col items-center justify-center ">
            <div className="circle  ">
              <SiAdguard className="text-6xl   absolute   right-4 top-5  " />
            </div>

            <p className="text-2xl font-normal mt-5 text-base_text">
              Top Quality
            </p>
            <div className="divider2"></div>
          </div>

          <div className="card w-2/6  text-white flex flex-col items-center justify-center ">
            <div className="circle  ">
              <TbTruckDelivery className="text-6xl   absolute  right-4 top-5  " />
            </div>

            <p className="text-2xl font-normal mt-5 text-base_text">
              Fast Delivery
            </p>
            <div className="divider2"></div>
          </div>

          <div className="card w-2/6  text-white flex flex-col items-center justify-center ">
            <div className="circle  ">
              <TbCurrencyNaira className="text-6xl   absolute  right-4 top-5  " />
            </div>

            <p className="text-2xl font-normal mt-5 text-base_text">
              Best Price
            </p>
            <div className="divider2"></div>
          </div>
        </div>
      </section>

      <section className="images-text mt-7 sm:mt-0 ">
        <div className="w-3/4 flex flex-col items-center text-center mx-auto">
          <h1 className=" text-xl sm:text-4xl text-base_text font-bold">
            Images From Our Production Line
          </h1>
          <p className="sm:w-2/4 mb-10 mt-3 text-center">
            Please Fill the form below to place place order. When your order is
            submitted successfully, Our sales rep will contact you immediately.
            please supply us with valid information
          </p>
        </div>

        <div className="w-3/4 mx-auto">
          <div className="top-image flex flex-col sm:flex-row gap-5 mb-10">
            <div className="sm:w-1/3  rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner3} />
            </div>
            <div className="sm:w-1/3  rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner6} />
            </div>
            <div className="sm:w-1/3  rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner4} />
            </div>
            <div className="sm:w-1/3  rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner5} />
            </div>
          </div>
          <div className="top-image flex flex-col sm:flex-row gap-5 mb-16 justify-center">
            <div className="sm:w-1/4  rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner6} />
            </div>
            <div className="sm:w-1/4  rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner7} />
            </div>
            <div className="sm:w-1/4  rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner8} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Order Form ========================== */}

      <section className="order-form bg-base_color mb-10 sm:mb-16" id="order-form">
        <div className="order-form-container w-3/4  mx-auto flex items-center flex-col pt-16 ">
          <h1 className=" text-xl text-center sm:text-4xl text-base_text font-bold">
            Images From Our Production Line
          </h1>
          <p className="sm:w-2/4 mb-10 mt-3 text-white text-center font-light ">
            Please Fill the form below to place place order. When your order is
            submitted successfully, Our sales rep will contact you immediately.
            please supply us with valid information
          </p>

          <div className=" w-[99%] sm:w-[50%] sm:p-10 sm:rounded-[50px]  sm:border-2 border-white border-solid mb-[40px]">
            <OrderForm />
          </div>
        </div>
      </section>
    </main>
  );
}
