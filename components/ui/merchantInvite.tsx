import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MerchantInvite() {
  return (
    <section className="w-full h-auto rounded-xl overflow-hidden text-white mt-5 md:mt-0">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#7099FF] px-6 py-4">
        <div className="flex gap-1 justify-between">
             <Image src="/Flat 2.svg" alt="" height={20} width={20}/>
            <p className="font-semibold">Refer and Earn</p>
        </div>
        <div className="flex gap-1 justify-center bg-[#1A1A1A1F] text-white py-1 px-2 rounded-full">
            <span className="text-sm opacity-90">Referral Code</span>
            <Image src="/Group (1).svg" alt="" height={20} width={20} className="cursor-pointer"/>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#ebf0f4] px-6 py-5 h-34 pt-2 gap-2 p-4 flex flex-col">
        <p className=" text-black">
          Invite 10 people and get 100 points to use in amazing rewards! T&C
          Apply.
        </p>

        <button
          className="
            mt-2 flex items-center justify-center gap-2
            rounded-md bg-[#1A1A1A]
            py-3 text-sm font-medium
            hover:bg-black transition
          "
        >
          Invite your friends
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
