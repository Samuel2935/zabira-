"use client";

import Image from "next/image";
import PaymentModeCard from "./PaymentModeCard";
import { PAYMENT_MODES } from "@/app/config/paymentModes";

export default function PaymentModeComponent() {
  return (
    <section className="mt-4 bg-white w-full rounded-md p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/lighting.svg"
          alt="lightings"
          width={20}
          height={20}
        />
        <p className="font-medium text-[#1A1A1A]">
          Start Making Payments
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          grid grid-cols-4 gap-3
          md:flex md:flex-wrap md:justify-center md:gap-4
        "
      >
        {PAYMENT_MODES.map((mode) => (
          <PaymentModeCard
            key={mode.id}
            mode={mode}
            onSelect={(id) => console.log('Selected:', id)}
          />
        ))}
      </div>
    </section>
  );
}
