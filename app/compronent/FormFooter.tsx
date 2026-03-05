export default function FormFooter() {
    return (
        <footer className="footer py-6">
           <div className="w-full mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">


                <div className="flex lg:flex-col flex-col-reverse gap-6">

                    {/* Disclaimer Text */}
                    <div className="text-[13px] text-[#4d4d4d] leading-[18px] space-y-3">

                        <p>
                            Not all plans offer all of these benefits. Benefits may vary by carrier
                            and location. Limitations and exclusions may apply.
                        </p>

                        <p>
                            By using this website, you consent to the real-time collection,
                            storage, use, and share of information on your device, or provided
                            by you (such as mouse movements and clicks) for medicare-helper.org
                            and/or its third-party providers. See our{" "}
                            <a href="/privacy" className="text-[#007aff] underline">
                                Privacy Policy
                            </a>{" "}
                            for more information.
                        </p>

                        <p>
                            This is an advertisement from medicare-helper.org - a privately owned
                            and operated non-government entity that helps Medicare recipients
                            connect with third partner Licensed Insurance Agent to compare their
                            Medicare Supplement Insurance, Medicare Advantage and Medicare Part D
                            Plan options. We are not affiliated with any government entity.
                            There is no obligation to enroll.
                        </p>

                        <p>
                            Participating sales agencies represent Medicare Advantage [HMO, PPO,
                            PFFS] and/or Part D Plan organizations that are contracted with
                            Medicare. Enrollment depends on the plan’s contract renewal.
                            The medicare plans represented are PDP, HMO, PPO or PFFS plans with
                            a Medicare contract. If your complaint involves a broker or agent,
                            be sure to include the name of the person when filing your grievance.
                        </p>

                        <p>
                            We are committed to protect your privacy. If you are a resident of CA
                            and do not want us to share your information please click on{" "}
                            <a href="/ccpa" className="text-[#007aff] underline">
                                Do Not Sell My Personal Information
                            </a>{" "}
                            for more details. We help Medicare Beneficiaries compare their
                            Medicare Insurance options with a Licensed Insurance Agent.
                            Invitations for applications for insurance are made through
                            medicare-helper.org. medicare-helper.org is a licensed health
                            insurance provider.
                        </p>

                        <p>
                            We do not offer every plan available in your area.
                        </p>

                    </div>

                    {/* Divider */}
                    <div>
                        <hr className="border-[#d7d7d7]" />
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between text-[13px] text-[#4d4d4d]">

                        <div className="flex items-center gap-2">
                            <p className="cursor-pointer hover:underline">Privacy Policy</p>
                            <span className="opacity-0 lg:opacity-1">|</span>
                            <p className="cursor-pointer hover:underline">Terms of Use</p>
                        </div>

                        <p className="mt-2 md:mt-0">
                            © 2025 Medicare Planners. All rights reserved.
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
}