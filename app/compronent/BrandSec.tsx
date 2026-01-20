import ImageLogos from "../assets/images/clearlogos.png";
import Image from "next/image";
const BrandSec = () => {
    return (
        <section className="">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="w-full text-center">
                    <Image
                        src={ImageLogos}
                        alt="#"
                        className="mx-auto max-w-[70%]"
                    />
                </div>
            </div>
        </section>
    )
}

export default BrandSec;