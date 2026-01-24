import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MerchantApply() {
  return (
    <section
      className="
        relative flex w-142 h-50.5
        rounded-xl
        bg-gradient-to-r from-[#502DFF] to-[#00E8D1]
        px-[23.51px] pt-[23.51px] gap-[29.39px]
        text-white
      "
    >
      {/* Left Content */}
      <div className="">
        <Image src="/vectorgroup.png" alt="" width={121.95} height={174.54} />
      </div>

      {/* Right Content */}
      <div className="text-left w-[369.65px] h-[140.99px] pt-2 gap-[11.75px]">
        <p className="font-bold text-white">Become a Merchant</p>
        <p className="text-white">
          Get access to APIs and assets for your merchant profile
        </p>
        <button className="flex-1 flex items-center justify-center gap-2 rounded-sm bg-[#FCFCFC] text-[#1A1A1A] px-3 py-2 cursor-pointer w-30 h-9 mt-2 text-sm font-Geista border border-[#E1E1E2]">
          Apply Now
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
