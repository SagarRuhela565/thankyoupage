"use client";

import React, { useEffect, useState } from "react";
import Profile from "../assets/images/profile.png";
import Image from "next/image";
import Footer from "../compronent/Footer";
import Chatslib from "../compronent/chatslib";

const messages = [
  "I have GREAT NEWS for you!",
  "You can qualify for the new $1,227 Spending Allowance Card that was just approved for 2026!",
  "Answer these two quick questions!",
  "What year were you born?",
];

export default function SupportPage() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (visibleCount < messages.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 600); // speed of each bubble
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowInput(true), 600);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <>
      <div className="flex flex-col min-h-screen font-roboto antialiased max-w-[800px] mx-auto">
        <div className="mx-auto mt-[16px] mb-10 md:mb-24 flex flex-col md:flex-row px-6 justify-between w-full">
          <div className="w-full">
            {/* Pre-header */}
            <div className="text-center">
              <p className="text-[16px] text-[#4B5563] font-bold">
                <span className="text-red-600">Warning:</span> Enrollment closes on{" "}
                <span>Saturday</span>, <span>01/24/2026</span> at midnight.
              </p>
            </div>

            {/* Heading */}
            <article className="mt-6">
              <h2 className="text-center text-[#595959] font-black text-[20px] sm:text-[calc(16.19048px+1.19048vw)]
 lg:text-[28px] leading-tight mx-auto">
                Claim Your $1,227* Spending Allowance Card This January To Help
                With Groceries And Other Expenses
              </h2>

              {/* Online */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 leading-[1.6]">
                  <div className="relative w-[12px] h-[12px]">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping inset-0"></span>
                    <span className="absolute inset-0 inline-flex w-full h-full rounded-full bg-green-600"></span>
                  </div>
                  <span className="text-black text-[16px]">Mary is online</span>
                </div>
              </div>

              {/* Chat */}
              <Chatslib />
            </article>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
