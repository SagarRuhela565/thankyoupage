"use client";

import React, { useEffect, useState } from "react";
import Profile from "../assets/images/profile.png";
import Image from "next/image";

const messages = [
  "I have GREAT NEWS for you!",
  "You can qualify for the new $1,227 Spending Allowance Card that was just approved for 2026!",
  "Answer these two quick questions!",
  "What year were you born?",
];

type Bubble = {
  text: string;
  showText: boolean;
};

export default function Chats() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    let i = 0;

    function showNextBubble() {
      if (i >= messages.length) {
        setTimeout(() => setShowInput(true), 600);
        return;
      }

      // Step 1: add empty bubble
      setBubbles((prev) => [...prev, { text: messages[i], showText: false }]);

      // Step 2: reveal text
      setTimeout(() => {
        setBubbles((prev) =>
          prev.map((b, index) =>
            index === prev.length - 1 ? { ...b, showText: true } : b
          )
        );
      }, 400);

      i++;
      setTimeout(showNextBubble, 900);
    }

    showNextBubble();
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-roboto antialiased">
      <div className="mx-auto mb-10 md:mb-24 flex flex-col px-6 w-full">

        {/* Chat */}
        <div className="flex justify-center mt-4">
          <div className="mx-auto w-[calc(100%-80px)] max-w-[318px]">

            {bubbles.map((bubble, i) => {
              const isLast = i === bubbles.length - 1;

              return (
                <div key={i} className="m-[12px] flex relative">
                  <div className="inline-block relative p-[12px] bg-[#F0F0F0] rounded-[6px] min-h-[24px] min-w-[24px]">
                    {bubble.showText && (
                      <p className="text-[#000] text-[16px] leading-[140%] animate-[fadeIn_0.25s_ease-out]">
                        {bubble.text}
                      </p>
                    )}
                  </div>

                  {/* Avatar sticks to latest bubble */}
                  {isLast && (
                    <Image
                      src={Profile}
                      alt="Avatar"
                      className="absolute right-[calc(100%+12px)] -bottom-[5px] min-h-[32px] min-w-[32px] max-h-[32px] max-w-[32px] rounded-full"
                    />
                  )}
                </div>
              );
            })}

            {/* Input bubble */}
            {showInput && (
              <div className="m-[12px] flex relative">
                <div className="inline-block relative p-[12px] bg-[#F0F0F0] rounded-[6px]">
                  <div className="mx-auto">
                    <div className="flex flex-col">
                      <input
                        inputMode="numeric"
                        placeholder="Enter Your Birth Year"
                        className="placeholder:text-[#656565] text-[#000] text-[16px] leading-[22.4px] rounded-[5px] border-[1.4px] border-[#007BEE] bg-[#FFF] p-[12px] w-[140px]"
                      />
                      <button className="px-[16px] py-[12px] bg-[#007BEE] text-white text-[16px] font-extrabold leading-[140%] rounded-[320px] mt-[8px]">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>

                {/* Avatar stays with input bubble */}
                <Image
                  src={Profile}
                  alt="Avatar"
                  className="absolute right-[calc(100%+12px)] -bottom-[5px] min-h-[32px] min-w-[32px] max-h-[32px] max-w-[32px] rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
