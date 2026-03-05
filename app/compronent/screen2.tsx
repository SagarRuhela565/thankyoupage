type ScreenProps = {
    next: () => void;
};

export default function Screen2({ next }: ScreenProps) {

    return (

        <div className="max-w-[580px] bg-white rounded-lg border border-[#d7d7d7] shadow-[2px_4px_51px_#0000000a] p-[15px] md:p-[2rem] text-center mx-auto">

            <div className="flex flex-col items-center">

                <div className="mb-2">
                    <ul className="flex items-center">

                        <li className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-[400]">
                                1
                            </div>
                            <div className="w-12 h-[2px] bg-red-600"></div>
                        </li>

                        <li className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-red-600 text-red-600 font-[400]">
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


                    <div className="text-[60px] text-[#eb1717] mb-4">
                        <svg
                            className="w-[80px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 12"
                            fill="#274066"
                        >
                            <path d="M6,.5l-.3.4s-.2.3-.4.6c0,.2-.2.3-.3.5,0,.2-.2.3-.2.6,0,.6.5,1.1,1.1,1.1s1.1-.5,1.1-1.1,0-.4-.2-.6-.2-.4-.3-.5c-.2-.3-.4-.6-.4-.6l-.3-.4ZM6,3.8h-1.1v1.5h-2.2c-.8,0-1.5.7-1.5,1.5s.1.7.4,1v2.8h9v-2.8c.2-.3.4-.6.4-1,0-.8-.7-1.5-1.5-1.5h-2.2v-1.5h-1.1ZM6,1.8s0,0,0,0c0,.2.2.3.2.5s0,.3,0,.3c0,.2-.2.4-.4.4s-.4-.2-.4-.4c0,0,0-.1,0-.3,0-.1.2-.3.2-.5,0,0,0,0,0,0ZM5.6,4.5h.8v.8h-.8v-.8ZM2.6,6h6.8c.4,0,.8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8h-.8c0,.4-.3.8-.8.8s-.8-.3-.8-.8h-.8c0,.4-.3.8-.8.8s-.8-.3-.8-.8h-.8c0,.4-.3.8-.8.8s-.8-.3-.8-.8.3-.8.8-.8ZM3.8,7.7c.3.3.7.5,1.1.5s.8-.2,1.1-.5c.3.3.7.5,1.1.5s.8-.2,1.1-.5c.3.3.7.5,1.1.5s.3,0,.4,0v1.6H2.2v-1.6c.1,0,.2,0,.4,0,.4,0,.8-.2,1.1-.5Z" />
                        </svg>
                    </div>


                    <p className="text-center text-xl md:text-[28px] font-[700] text-[#274066] mb-8">
                        Were you born before 1958?
                    </p>


                    <a onClick={next}
                        className="mb-[1rem] w-[92%] cursor-pointer text-center py-3 border-2 border-gray-700 rounded text-[#274066] font-semibold hover:bg-[#274066] hover:text-white transition text-[18px]">
                        Yes
                    </a>

                    <a onClick={next}
                        className="mb-[1rem] w-[92%] cursor-pointer text-center py-3 border-2 border-[#274066] rounded text-[#274066] font-semibold hover:bg-[#274066] hover:text-white transition text-[18px]">
                        No
                    </a>

                    <a onClick={next}
                        className="mb-[1rem] w-[92%] cursor-pointer text-center py-3 border-2 border-[#274066] rounded text-[#274066] font-semibold hover:bg-[#274066] hover:text-white transition text-[18px]">
                        Skip
                    </a>

                </form>

            </div>

        </div>

    )
}