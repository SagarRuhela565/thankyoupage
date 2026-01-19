const FAQsec = () => {
    return (
        <section className="py-16">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-8">
                    <div>
                        <h2 className="text-blue-900 text-[44px] font-normal leading-tight">
                            Got Questions?
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group border-gray-300 pt-4">
                            <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                                How Much Does Health Insurance Cost?
                            </summary>
                            <div className="mt-3 text-gray-600">
                                <p>
                                    Health insurance costs can vary depending on several factors, including the type of plan, your location, age, and coverage needs. Typically, you'll encounter costs such as: Monthly Premiums: The amount you pay each month to keep your coverage active. Deductibles: The amount you pay out-of-pocket before your insurance starts covering certain services. Copays and Coinsurance: Your share of the costs for doctor visits, prescriptions, or hospital stays. Out-of-Pocket Maximum: The maximum amount you'll pay in a year for covered services. To find the best plan within your budget, visit our website and compare coverage options or contact us for personalized recommendations!
                                </p>
                            </div>
                        </details>

                        <details className="group border-t-2 border-gray-300 pt-4">
                            <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                                What Are The Different Types Of Health Insurance?
                                
                            </summary>
                            <div className="mt-3 text-gray-600">
                                <p>
                                Health insurance plans come in several forms, each offering different levels of flexibility, coverage, and costs. Here are the main types: Health Maintenance Organization (HMO) – You’ll have lower costs but need to choose doctors and hospitals within a specific network. Referrals from a primary care physician are required for specialists. Preferred Provider Organization (PPO) – Offers more flexibility by allowing you to see any doctor, even outside the network, but at a higher cost. No referrals needed for specialists. Exclusive Provider Organization (EPO) – Similar to an HMO, but no referral is needed to see specialists. However, coverage is only provided for in-network services. Point of Service (POS) – Combines features of both HMO and PPO plans, where you’ll need a referral for specialists but can see out-of-network doctors at a higher cost. High-Deductible Health Plan (HDHP) – Paired with Health Savings Accounts (HSAs), these plans have lower premiums and higher deductibles, offering savings for people who don’t expect many healthcare needs. Explore these options further on our website or reach out to us to help find the right plan for you!
                                </p>
                            </div>
                        </details>

                        <details className="group border-t-2 border-gray-300 pt-4">
                            <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                                What Is Open Enrollment For Health Insurance?
                                
                            </summary>
                            <div className="mt-3 text-gray-600">
                                <p>
                                   Open Enrollment is the annual period when you can sign up for, switch, or make changes to your health insurance plan. It’s the primary time each year to enroll in a new plan, update your coverage, or switch to a different insurer. During this time, you can: Choose a new health insurance plan. Add or remove dependents. Update your coverage details. Missed Open Enrollment? You can only get coverage outside of this window if you qualify for a Special Enrollment Period due to life events like marriage, having a baby, or losing other health coverage. To explore your options and apply, visit our website or reach out to us for personalized assistance!

                                </p>
                            </div>
                        </details>

                        <details className="group border-t-2 border-gray-300 pt-4">
                            <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                                How Can I Apply For Health Insurance?
                                
                            </summary>
                            <div className="mt-3 text-gray-600">
                                <p>
                                Applying for health insurance is quick and easy! Simply visit our website to explore your plan options and get started. You can compare coverage, check costs, and apply all in one place. Once you find the plan that fits your needs, you can complete the application online in just a few steps. If you need any help along the way, feel free to reach out to us for personalized assistance! Ready to get covered? Start your application now
                                </p>
                            </div>
                        </details>

                        <details className="group border-t-2 border-gray-300 pt-4">
                            <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                                What Does Health Insurance Cover?
                                
                            </summary>
                            <div className="mt-3 text-gray-600">
                                <p>
                                Health insurance typically covers a wide range of medical services to help you stay healthy and manage unexpected healthcare needs. Most plans include: Doctor Visits – Primary care and specialists. Preventive Care – Routine check-ups, vaccines, and screenings at no additional cost. Hospital Stays – Coverage for inpatient services, surgeries, and emergency care. Prescription Drugs – Medications prescribed by your doctor. Mental Health Services – Counseling, therapy, and substance abuse treatment. Maternity and Newborn Care – Prenatal visits and childbirth. Specific coverage depends on the plan you choose. To see what’s covered and find a plan that fits your needs, visit our website or contact us for help!  
                                </p>
                            </div>
                        </details>

                    </div>
                </div>
            </div>
        </section>

    );
}
export default FAQsec;