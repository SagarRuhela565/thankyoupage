import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-roboto",
});

type ScreenProps = {
    next: () => void;
};

export default function Screen1({ next }: ScreenProps) {

    return (

        <section className="w-full">

            <div className="max-w-[580px] bg-white rounded-lg border border-[#d7d7d7] shadow-[2px_4px_51px_#0000000a] p-[15px] md:p-[2rem] text-center mx-auto">

                <h1 className="text-[24px] font-[500] text-[#274066] mb-6 leading-[32px] text-left">
                    Looking for Medicare Insurance Plans? Speak to a Licensed Agent to see if You Are Eligible!
                </h1>

                <ul className="space-y-3 text-left mb-6 text-[18px] text-[#4d4d4d]">

                    <li className="flex gap-3 items-center">
                        <span className="text-white bg-[#007aff] flex justify-center items-center w-[20px] aspect-square rounded-full flex-none"><svg className="w-[80%] h-auto" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg></span>
                        <p>Medicare Advantage Plans</p>
                    </li>

                    <li className="flex gap-3 items-center">
                        <span className="text-white bg-[#007aff] flex justify-center items-center w-[20px] aspect-square rounded-full flex-none"><svg className="w-[80%] h-auto" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg></span>
                        <p>Medicare Supplement Insurance Plans</p>
                    </li>

                    <li className="flex gap-3 items-center">
                        <span className="text-white bg-[#007aff] flex justify-center items-center w-[20px] aspect-square rounded-full flex-none"><svg className="w-[80%] h-auto" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg></span>
                        <p>Medicare Part D Prescription Drug Plans</p>
                    </li>

                </ul>

                <button
                    onClick={next}
                    className="w-full bg-[#dc2626] text-white py-3 rounded-md hover:bg-red-700 transition text-[18px] mb-[2rem] cursor-pointer"
                >
                    See if I Qualify →
                </button>
            </div>


        </section>
    )
}