"use client";

import Link from "next/link";
import { FaEnvelope, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="text-center sm:text-left">
      <div className="bg-base_color poppins text-white px-5  sm:px-16 pt-10">
        <div className="display-text">
          <h1 className=" text-2xl sm:text-6xl leading-tight mb-12 mt-10">
            Your Number 1 trusted Solid Mineral Producers
            <br />
            in African...
          </h1>
        </div>

        <div className="footerlink-container sm:flex justify-between pb-8">
          <div className="mb-5 sm:mb-0">
            <h4 className=" sm:mb-5 text-gray-400">OFFICE</h4>
            <p className="mb-4 leading-8 text-sm font-light">
              Km 102 Auchi Igarra Road, Ikpeshi, Edo State, Nigeria. <br />
              Land Mark Freedom Junction
            </p>
            <div className="footer-social flex justify-center sm:justify-start">
              <div className="flex justify-between  w-28 mb-5">
                <FaEnvelope className="text-lg" />
                <FaYoutube className="text-xl" />
                <FaFacebookSquare className="text-lg" />
                <PiInstagramLogoFill className="text-xl" />
              </div>
            </div>
          </div>

          <div className="mb-5 sm:mb-0">
            <h4 className="sm:mb-5 text-gray-400">COMPANY</h4>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="/about">About</Link>
            </p>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="/contact">Contact Us</Link>
            </p>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="#order">Place Order</Link>
            </p>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="/faq">FAQ</Link>
            </p>
          </div>
          <div>
            <h4 className="sm:mb-5 text-gray-400">MEET ZIPRUS</h4>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="/guarantee">Our Guarantee</Link>
            </p>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="/impact">Ziprus Impact</Link>
            </p>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="/testimonial">Customer Stories</Link>
            </p>
            <p className="mb-0 leading-8 text-sm font-light">
              <Link href="/partnership">Partnership</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright bg-base_two text-white sm:flex justify-between items-center h-14 sm:px-10 text-base font-semibold ">
        <p className="py-4 sm:py-0">Copyright 2024 - Ziprus - Nigeria</p>
        <div className=" flex justify-around sm:justify-between items-center sm:w-56 bg-base_color sm:bg-base_two py-1 sm:py-0 ">
          
          <Link href={"/term"}><p>Term of Use</p></Link>
          <Link href={"/policy"}><p>Privacy Policy</p></Link>
          
        </div>
      </div>
    </footer>
  );
}
