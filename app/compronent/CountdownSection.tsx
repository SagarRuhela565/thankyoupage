"use client";

import { useEffect, useState } from "react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <section className="py-6 ">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

        {/* Title */}
        <div className="py-2 text-center">
          <p className="text-[18px] font-bold">
            THE PENNSYLVANIA HOTLINE IS OPEN
          </p>
        </div>

        {/* Countdown */}
        <div className="py-2 text-center">
          <div className="inline-flex gap-2 text-blue-900">

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">
                {minutes} {" "} 
              </span>
              <span className="text-sm">Minutes</span>
            </div>
<span className="text-4xl font-bold ">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">
                {seconds}
              </span>
              <span className="text-sm">Seconds</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
