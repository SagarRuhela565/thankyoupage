"use client";

import { useEffect, useState } from "react";

export default function LastScreenLoader() {

    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev >= 3) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-[580px] bg-white rounded-[10px] border border-[#d7d7d7] shadow-[2px_4px_51px_#0000000a] p-8 mx-auto">

            <ul className="space-y-8 relative">

                {/* Step 1 */}
                <li
                    className={`flex items-center gap-4 transition-all duration-700 reletive ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}
                >
                    <div className="flex flex-col items-center relative">
                        <div className="h-[55px] w-auto"> 
                            <svg viewBox="0 0 12 12" className="h-full w-auto fill-[#274066]">
                                <path d="M2.2,10.5s-.8,0-.8-.8.8-3,4.5-3 4.5,2.2,4.5,3-.8.8-.8.8H2.2ZM6,6c1.2,0,2.2-1,2.2-2.2s-1-2.2-2.2-2.2-2.2,1-2.2,2.2,1,2.2,2.2,2.2Z" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[24px] text-[#000] uppercase leading-[1.1] font-medium">
                            Reviewing your Details
                        </h3>
                        <p className="text-[#000000] text-[16px]">
                            Checking Your Information
                        </p>
                    </div>
                </li>

                {/* Step 2 */}
                <li
                    className={`flex items-center gap-4 transition-all duration-700 reletive ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}
                >
                    <div className="flex flex-col items-center relative">
 

                        <div className="w-[55px] h-auto">
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full h-[calc(100%-17px)] bg-transparent border-l border-dashed border-[#007aff]"></div>

                            <svg viewBox="0 0 512 512" className="h-full w-auto fill-[#274066]">
                                <path d="M256,0C166,0,91,72.5,91,165s10.6,66.6,30.9,96l121.5,189.6c5.9,9.2,19.4,9.2,25.3,0l122-190.2c19.9-28.1,30.4-61.1,30.4-95.4C421,74,347,0,256,0ZM256,240c-41.4,0-75-33.6-75-75s33.6-75,75-75,75,33.6,75,75-33.6,75-75,75Z" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[24px] text-[#000] uppercase leading-[1.1] font-medium">
                            Searching your Area
                        </h3>
                        <p className="text-[#000000] text-[16px]">
                            Finding Local Providers
                        </p>
                    </div>
                </li>

                {/* Step 3 */}
                <li
                    className={`flex items-center gap-4 transition-all duration-700 reletive ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}
                >
                    <div className="flex flex-col items-center relative">
 

                        <div className="w-[55px] h-auto">
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full h-[calc(100%-17px)] bg-transparent border-l border-dashed border-[#007aff]"></div>
                            <svg viewBox="0 0 12 12" className="h-full w-auto fill-[#274066]">
                                <path d="M6,0C4.1,0,1.9.4,0,1.4c0,2,0,7.1,6,10.6,6-3.5,6-8.6,6-10.6C10.1.4,7.9,0,6,0ZM5.9,7.7l-2.5-2.9c.2-.1.9-.6,1.4,0l1.1,1.3s2.9-3,2.9-3c.1-.1.3-.3.6,0,0,0-3.5,4.6-3.5,4.6Z" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[24px] text-[#000] uppercase leading-[1.1] font-medium">
                            Matching providers
                        </h3>
                        <p className="text-[#000000] text-[16px]">
                            Searching for Licensed Insurance Agents
                        </p>
                    </div>
                </li>

            </ul>

        </div>
    );
}