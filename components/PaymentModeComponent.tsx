"use client";

import Image from "next/image";
import PaymentModeCard from "./PaymentModeCard";
import { PAYMENT_MODES } from "@/app/config/paymentModes";

export default function PaymentModeComponent() {
  return (
    <div className="mt-4 bg-white p-6 w-302 h-58.5 gap-6 rounded-md mx-auto">
      <div className="w-56.25 h-5.5 gap-2 ml-4 mb-4 flex">
        <Image
          src="/lighting.svg"
          alt="lightings"
          width={20}
          height={20}
          className="inline-block mr-2"
        />
        <p className=" text-[#1A1A1A]">Start Making Payments</p>
      </div>

      <div className="flex gap-4 justify-center overflow-hidden">
        {PAYMENT_MODES.map((mode) => (
          <PaymentModeCard
            key={mode.id}
            mode={mode}
            onSelect={(id) => console.log("Selected:", id)}
          />
        ))}
      </div>
    </div>
  );
}
