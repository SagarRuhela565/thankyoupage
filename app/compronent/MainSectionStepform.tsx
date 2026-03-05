"use client"

import { useState } from "react"
import Screen1 from "../compronent/screen1"
import Screen2 from "../compronent/screen2"
import Screen3 from "../compronent/screen3"
import Screen4 from "../compronent/screen4"
import Screen5 from "../compronent/screen5"
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-roboto",
});

export default function MainStepForm() {

    const [step, setStep] = useState(1)

    return (
        <main className={`min-h-screen flex items-center justify-center bg-slate-100 ${roboto.className}`}>

          <div className="w-full mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">



                {step === 1 && <Screen1 next={() => setStep(2)} />}
                {step === 2 && <Screen2 next={() => setStep(3)} />}
                {step === 3 && <Screen3 next={() => setStep(4)} />}
                {step === 4 && <Screen4 next={() => setStep(5)} />}
                {step === 5 && <Screen5 />}


                {step !== 5 && (
                    <div className="max-w-[350px] mx-auto text-[16px] leading-[20px] text-center">
                        <p className="mt-6">
                            We represent carriers including Humana, UnitedHealthcare®, Aetna, Cigna Healthcare, Wellcare, and Anthem Blue Cross Blue Shield.
                        </p>
                    </div>
                )}

            </div>

        </main>
    )
}