"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GifImg from '../assets/images/img-9.gif';
import footerImg from '../assets/images//img-7.webp';
import ThankLoader from "./ThankLoader";


const EligibilityConfirmation: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
     const [loading, setLoading] = useState(false);

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
        <>
            {loading ? (
                <ThankLoader onFinish={() => setLoading(false)} duration={10} />
            ) : (
                <section className={`border-y border-gray-200 py-16 bg-gray-100 `}>
                    <div className="max-w-[1024px] mx-auto px-[1rem]">

                        {/* Heading */}
                        <div className="py-2 text-center">
                            <h3 className="text-[30px] font-black">
                                🎉 Great News sagar! 🎉
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="py-2 max-w-xl mx-auto text-center">
                            <p className="text-base leading-relaxed">
                                <strong>It Seems Like You May Qualify For an </strong>
                                <strong className="bg-[#FFEB00] px-1">
                                    Affordable Health Plan.
                                </strong>
                                <strong> Agents Are Ready to Assist You! Call </strong>
                                {" "}
                                <a
                                    href="tel:+18338403713"
                                    className="text-blue-500 underline font-semibold"
                                >
                                    +18338403713
                                </a>
                                {" "}
                                (TTY 711)
                            </p>
                        </div>

                        {/* GIF */}
                        <div className="py-2 max-w-xl mx-auto text-center">
                            <Image
                                src={GifImg}
                                alt="Eligibility confirmation"
                                className="mx-auto max-w-full"
                            />
                        </div>

                        {/* Countdown */}
                        <div className="py-2 text-center">
                            <h5 className=" text-[20px] font-black">
                                Tap Below to Confirm Your Eligibility
                            </h5>
                            <p className="font-bold">
                                We are holding your spot for next{" "}
                                <span className="countdown-value text-[1.4rem] sm:text-[2rem]">
                                    {minutes} :
                                </span>
                                <span className="countdown-value text-[1.4rem] sm:text-[2rem]">
                                    {seconds}
                                </span>{" "}minutes
                            </p>
                        </div>

                        {/* Call Button */}
                        <div className="py-2 max-w-xl mx-auto text-center">
                            <a
                                href="tel:+18338403713"
                                className="
                             inline-flex items-center gap-4
    bg-[#dc2626] hover:bg-[#ef4444]
    text-white border
    px-8 py-3 rounded-md
    animate-[pulseZoom_1s_ease-in-out_infinite_alternate]
                        "
                            >
                                {/* Icon (Desktop only) */}
                                <span className="hidden lg:block">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-[64px] h-[64px] fill-current"
                                        aria-hidden="true"
                                    >
                                        <path d="M15 12h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.097 15.097 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1" />
                                    </svg>
                                </span>

                                {/* Text */}
                                <span className="flex flex-col text-left">
                                    <span className="text-[36px] font-semibold ">
                                        +18338403713
                                    </span>
                                    <span className="font-[600] tracking-wider opacity-90 text-[16px]">
                                        M-F 7AM–10PM CST. TTY 711.
                                    </span>
                                </span>
                            </a>
                        </div>

                        {/* Bottom Image */}
                        <div className="py-2 text-center">
                            <Image
                                src={footerImg}
                                alt="Eligibility confirmation"
                                className="mx-auto max-w-full" />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default EligibilityConfirmation;
