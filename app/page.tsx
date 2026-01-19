import Image from "next/image";
import EligibilityConfirmation from "./compronent/EligibilityConfirmation";
import SecSprater from "./compronent/SecSprater";
import MainBannner from "./compronent/MainBannner";
import BrandSec from "./compronent/BrandSec";
import CTAsec from "./compronent/CTAsec";
import FAQsec from "./compronent/FAQsec";
import BannerForm from "./compronent/BannerForm";
import CountdownSection from "./compronent/CountdownSection";

export default function Home() {
  return (
    <main className="bg-[#f3f4f6]">
      {/* <EligibilityConfirmation /> */}
      <SecSprater layout={1}/>
      <MainBannner />
      <BrandSec />
      <SecSprater layout={2}/>
      <CTAsec />
      <FAQsec />
      <BannerForm />
      <SecSprater layout={1}/>
      <CountdownSection/>
      <CTAsec/>
    </main>
  );
}
