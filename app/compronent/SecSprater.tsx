const SecSprater = ({ layout = 1 }: { layout: number }) => {
    return (
        <>
            {layout === 2 ? (
                <section className="bg-[#f8bc16] py-3">
                    <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                        <div className="text-center">
                            <p className="font-bold">
                                Our professional health insurance agents will assist you in finding the perfect plan and coverage.
                            </p>
                        </div>
                    </div>
                </section>

            ) : (
                <section className="bg-[#f8bc16] py-3">
                    <div className="max-w-[1280px] mx-auto px-4">
                        <p className="text-center font-bold">
                            YOU CAN STILL GET COVERED - ACT NOW!
                        </p>
                    </div>
                </section>
            )}
        </>
    );
};

export default SecSprater;
