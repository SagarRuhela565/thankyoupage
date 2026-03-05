type ScreenProps = {
    next: () => void;
};

export default function Screen3({ next }: ScreenProps) {
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

                <form className="flex flex-col items-center w-full max-w-md">

                    {/* Icon */}
                    <div className="text-[60px] text-[#eb1717] mb-4">
                        <svg
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 7 3"
                            fill="none"
                            stroke="#274066"
                            strokeWidth={0.2}
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            className="w-[80px]"
                        >
                            <path d="M4.6,1.9s-.5-.3-.5-.5,0-.2.2-.2c0,0,.2,0,.3.2,0-.2.2-.2.3-.2.1,0,.2,0,.2.2,0,.3-.5.5-.5.5Z" />

                            <path d="M5.4.9c0,0,0-.1,0-.2,0,0,0,0-.2,0h-2.8c0,0-.1,0-.2,0,0,0,0,0,0,.2v1.6c0,0,0,.1,0,.2,0,0,0,0,.2,0h2.8c0,0,.1,0,.2,0,0,0,0,0,0-.2,0-.4,0-1.2,0-1.6Z" />

                            <circle cx="3.2" cy="1.4" r="0.3" />

                            <path d="M3.7,2.3c0-.3-.5-.5-.5-.5,0,0-.5.2-.5.5h1.1Z" />

                            <line x1="4.1" y1="2.3" x2="5" y2="2.3" />
                        </svg>
                    </div>

                    {/* Question */}
                    <p className="text-center text-xl md:text-[28px] font-[700] text-[#274066] mb-8">
                        Are you currently enrolled in Medicare Part A and Part B?
                    </p>

                    {/* Buttons */}

                    <button
                        onClick={next}
                        className="mb-[1rem] w-[92%] cursor-pointer text-center py-3 border-2 border-gray-700 rounded text-[#274066] font-semibold hover:bg-[#274066] hover:text-white transition text-[18px]"
                    >
                        Yes
                    </button>

                    <button
                        onClick={next}
                        className="mb-[1rem] w-[92%] cursor-pointer text-center py-3 border-2 border-[#274066] rounded text-[#274066] font-semibold hover:bg-[#274066] hover:text-white transition text-[18px]"
                    >
                        No
                    </button>

                    <button
                        onClick={next}
                        className="mb-[1rem] w-[92%] cursor-pointer text-center py-3 border-2 border-[#274066] rounded text-[#274066] font-semibold hover:bg-[#274066] hover:text-white transition text-[18px]"
                    >
                        Not Sure
                    </button>

                </form>

            </div>
        </div>
    );
}