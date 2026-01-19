const CTAsec = () => {
    return (
        <div>
            <section className="py-3 border-t border-gray-200">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <h3 className="text-center text-[30px] font-black">
                        It's Easier to Compare Over the Phone
                    </h3>
                </div>
            </section>

            <section className="bg-white py-6">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

                    <div className="max-w-[580px] mx-auto text-center py-2">
                        <a
                            href="#"
                            className="inline-flex items-center gap-4
                 bg-green-600 hover:bg-green-500
                 text-white
                 px-8 py-6 rounded-xl
                 animate-[pulseZoom_1.2s_ease-in-out_infinite_alternate]"
                        >

                            <svg viewBox="0 0 24 24" className="hidden lg:block w-[64px] w-[64px] fill-current">
                                <path
                                    d="M15 12h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.097 15.097 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1"
                                />
                            </svg>

                            <div className="flex flex-col text-center">
                                <span className="text-[26px] lg:text-[36px] font-bold leading-tight">
                                    +18559391237
                                </span>
                                <span className="text-[16px] font-[600] tracking-wider opacity-90">
                                    CALL THE PENNSYLVANIA HOTLINE
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="py-2 text-center">
                        <p className="font-bold text-base">
                            🟢 Live Agents Available
                        </p>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default CTAsec;