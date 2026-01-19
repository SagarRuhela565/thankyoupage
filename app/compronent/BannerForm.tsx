import BannerFormImg from '../assets/images/bg-img-2.gif';
const BannerForm = () => {
    return (
    <section className="relative bg-white py-[6rem]">
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
            <img
                src={BannerFormImg.src}
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
         <div className=" max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="py-2 text-center">
                    <h1 className="text-[30px] font-normal mb-12 leading-[1.3] text-[#000]">
                        Don't Miss Out - Compare Your Health Coverage Options
                    </h1>
                    <p className="text-[18px] text-[#000]">
                        ENTER ZIP CODE & COMPARE RATES TO SEE HOW MUCH YOU CAN SAVE! 👇
                    </p>
                </div>

                <form action="/eligibility" method="POST">
                    <fieldset>
                        <div className="py-2 max-w-[580px] mx-auto">
                            <div className="py-2 max-w-[450px] mx-auto flex flex-col gap-4">

                                <input
                                    type="text"
                                    name="zip_code"
                                    id="zip"
                                    placeholder="Enter Your Zip Code"
                                    className="h-[58px] border border-gray-300 rounded-md px-4 text-base bg-white shadow-sm"
                                />

                                <button
                                    type="submit"
                                    className="relative cursor-pointer h-12 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-md text-lg font-medium flex items-center justify-center gap-2"
                                >
                                    <span className="hidden w-4 h-4 animate-spin">
                                        <svg viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"
                                            />
                                        </svg>
                                    </span>

                                    Next →
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <div className="mt-5 py-2 max-w-[450px] mx-auto text-center bg-gray-200/60 p-3 rounded-md shadow-md">
                    <a href="#" className="inline-flex items-center gap-3 text-blue-900 font-semibold">

                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M15 12h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.097 15.097 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1" />
                            </svg>

                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                        </div>

                        <div className="flex flex-col text-center">
                            <span className="text-[20px] font-bold">
                                +18338341589
                            </span>
                            <span className="text-[12px] tracking-[.1em] text-gray-600">
                                CALL TOLL-FREE M-F 7AM-6PM CST
                            </span>
                        </div>
                    </a>
                </div>
            </div>
    </section>
    )
}

export default BannerForm;