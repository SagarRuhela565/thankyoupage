import { useEffect, useState } from "react";
import LastScreenLoader from "./LastScreenLoader";

type ScreenProps = {
    next?: () => void;
};

export default function Screen5({ next }: ScreenProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4800); // 3600ms

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LastScreenLoader />;
    }

    return (

        <div className="max-w-[700px] bg-white rounded-lg border border-[#d7d7d7] shadow-[2px_4px_51px_#0000000a] p-[15px] md:p-[2rem] text-center mx-auto">




            <h1 className="font-[700] text-[#2da9c2] mb-[2rem] text-[24px] leading-[32px]">
                A Licensed Insurance Agent Can Help You Compare Plans!
            </h1>


            <h2 className="text-[18px] text-[#274066] leading-[1.5] mb-8 font-[500]">
                To help you with your Health Insurance Plan, we need to connect you with
                a Licensed Insurance Agent. Call us to discuss your options on{" "} &nbsp;
                <a
                    href="tel:8664802983"
                    className="text-[#eb1717] font-semibold whitespace-nowrap"
                >
                    (866) 480-2983
                </a>{" "}
                (TTY 711) to be connected.
            </h2>


            <a
                href="tel:8664802983"
                className="max-w-[443px] mx-auto flex items-center justify-center gap-4 w-full pt-[12px] lg:py-[18px] p-2 lg:px-6 rounded-[12px] bg-gradient-to-b from-[#ff4343] to-[#9e0000] text-white mb-8"
            >

                <div className="relative flex items-center justify-center">

                    <svg
                        viewBox="0 0 24 24"
                        className="md:w-[45px] w-[30px] fill-white"
                    >
                        <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                        <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
                    </svg>

                </div>


                <div className="text-left">
                    <p className="text-[18px] md:text-[37px] font-bold leading-[1]">(866) 480-2983</p>
                    <p className="text-[15px] uppercase tracking-[0.5px]">
                        Call Toll-Free M-F 8AM–8PM EST
                    </p>
                </div>

            </a>


            <h2 className="text-[14px] md:text-[18px] text-[#274066] leading-[1.1] mb-[2rem] font-[500]">
                We represent carriers including Humana, UnitedHealthcare®, Aetna,
                Cigna Healthcare, Wellcare, and Anthem Blue Cross Blue Shield.
            </h2>

        </div>



    )
}