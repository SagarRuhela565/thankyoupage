import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F2B] border-t border-white">
      <div className="max-w-[1470px] mx-auto px-[15px] py-[20px] text-white">

        {/* Top links */}
        <div className="flex flex-wrap justify-start text-[16px] mb-6">
          <Link href="/privacy-policy" className="text-[#4990E2] underline hover:no-underline">
            Privacy Policy
          </Link>
          <span className="text-[#4990E2] mx-[10px]">|</span>

          <Link href="/terms-of-use" className="text-[#4990E2] underline hover:no-underline">
            Terms of Use
          </Link>
          <span className="text-[#4990E2] mx-[10px]">|</span>

          <Link href="/contact-us" className="text-[#4990E2] underline hover:no-underline">
            Contact Us
          </Link>
        </div>

        {/* Body text */}
        <div className="space-y-6 text-[16px] leading-relaxed text-white">

          <p>
            Copyright © QualifyBenefitsNow.com © 2026 | All rights reserved
            <br />
            <br />
            Operated by VERTEXCREST SOLUTIONS LIMITED
            <br />
            128, City Road, London, EC1V 2NX, UNITED KINGDOM
          </p>

          <p>
            *Not all services, plans, benefits, or savings are available in all
            areas or to all individuals. The availability of services, products,
            plans and savings is subject to your resident zip code, eligibility
            criteria, and other factors. Limitations and exclusions may apply.
            Our advertisers do not offer every service, plan, benefit or saving
            available in your area. Any information, savings, benefits, or price
            quotations listed may not apply in your location or if certain
            qualifications or requirements are not met. Additional eligibility
            criteria may apply. Consult the appropriate professional or
            representative to identify options available to you.
          </p>

          <p>
            This website is not affiliated with or endorsed by the U.S.
            government or any federal program. This site provides referrals to
            representatives of various organizations, including licensed
            insurance providers and other service providers. By visiting our
            advertisers’ websites, completing their contact forms, or calling
            the number listed on our page, you may be connected with a
            representative who can provide details about services, plans,
            benefits or savings opportunities in your area.
          </p>

          <p>
            The information provided on this website is for general informational
            purposes only and should not be considered professional, legal, or
            insurance advice. Please seek advice from a qualified professional
            before making decisions based on the information provided. This
            website acts as an independent digital media and advertising
            publisher. This webpage is formatted as an advertorial and is
            provided by this website. An advertorial is a form of advertisement
            presented in an editorial-style format.{" "}
            <span className="uppercase font-semibold">
              Please be aware that this is an advertisement and not an actual
              news article, blog, or consumer protection update.
            </span>
          </p>

          <p>
            <span className="uppercase font-semibold">
              This website may receive compensation for clicks or sales
              generated through content featured on this page.
            </span>{" "}
            This compensation may affect the companies displayed, the placement
            of advertisements, and their order of appearance. Any information,
            savings, benefits, or price quotations listed may not apply in your
            location or if specific requirements are not met. Additionally,
            advertisers may have their own qualification or eligibility
            requirements.
          </p>

        </div>
      </div>
    </footer>
  );
}
