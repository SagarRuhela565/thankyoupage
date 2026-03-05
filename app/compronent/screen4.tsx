type ScreenProps = {
    next: () => void;
};

export default function Screen4({ next }: ScreenProps) {

    return (

        <div className="max-w-[580px] bg-white rounded-lg border border-[#d7d7d7] shadow-[2px_4px_51px_#0000000a] p-[15px] md:p-[2rem] text-center mx-auto">

            <div className="flex flex-col items-center">

                {/* Step Progress */}
                <div className="mb-2">
                    <ul className="flex items-center">

                        <li className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-[400]">
                                ✓
                            </div>
                            <div className="w-12 h-[2px] bg-red-600"></div>
                        </li>

                        <li className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-[400]">
                                2
                            </div>
                            <div className="w-12 h-[2px] bg-red-600"></div>
                        </li>

                        <li>
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-red-600 text-red-600 font-[400]">
                                3
                            </div>
                        </li>

                    </ul>
                </div>

                <p className="text-center text-[13px] mb-8">
                    You are close to being matched with a licensed insurance agent!
                </p>

                <form className="w-full max-w-md">
                    <div className="card-icon"><svg className="w-[80px] opacity-0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><defs></defs><path className="st0" d="M5.5,1.3c.3-.2.7-.2,1,0l3.8,3.2c.2.1.3.4.3.6v4.7c0,.4-.3.8-.8.8h-2.9c-.2,0-.4-.2-.4-.4v-3.1h-1v3.1c0,.2-.2.4-.4.4h-2.9c-.4,0-.8-.3-.8-.8v-4.7c0-.2,0-.4.3-.6l3.7-3.2ZM6,1.9l-3.8,3.2v4.7h2.5v-3.1c0-.2.2-.4.4-.4h1.8c.2,0,.4.2.4.4v3.1h2.5v-4.7l-3.8-3.2Z"></path></svg></div>

                    <h2 className="text-center text-xl md:text-[28px] font-[700] text-[#274066] mb-8">
                        What is your zip code?
                    </h2>

                    <input
                        type="text"
                        placeholder="Enter Your Zip Code"
                        className="w-full border rounded p-3 mb-6"
                    />
                    <span className=" mb-5 text-[13px] text-left w-100 block text-[#eb1717] mt-[-17px]">Invalid Zip Code</span>

                    <button
                        onClick={next}
                        className="w-full bg-[#00b67a] text-white py-3 rounded-full text-[18px] cursor-pointer flex items-center justify-center gap-2 mb-[2rem]"
                    >
                        Submit <svg
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 23 23"
                            className="w-[25]"
                        >
                            <path
                                fill="#fff"
                                fillRule="evenodd"
                                d="M1.4,11.5c0-.4.3-.7.7-.7h17l-4.5-4.5c-.3-.3-.3-.7,0-1,.3-.3.7-.3,1,0l5.8,5.7c.3.3.3.7,0,1,0,0,0,0,0,0l-5.8,5.8c-.3.3-.7.3-1,0s-.3-.7,0-1l4.5-4.5H2.2c-.4,0-.7-.3-.7-.7Z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}