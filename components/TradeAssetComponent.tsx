"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AssetCard from "./AssetCard";
import { ASSETS } from "@/app/config/asset";

export default function TradeAssetCardComponent() {
  return (
    <div className="w-full h-auto justify-between p-2 rounded-xl">
      {/* Header */}
    <div className="mb-4 flex items-start sm:items-center justify-between gap-3">
  
  {/* Left text – never truncate */}
  <p className="flex items-center gap-2 text-sm text-gray-500 leading-tight">
    <Image
      src="/lighting.svg"
      alt="Trading Icon"
      width={20}
      height={20}
      className="shrink-0"
    />
    <span>
      Top traded assets this week
    </span>
  </p>

  {/* Right button – responsive sizing */}
  <button
    className="
      flex items-center gap-1.5
      shrink-0
      rounded-full bg-black text-white
      border border-black
      px-3 py-1
      text-xs sm:text-sm
      sm:px-4 sm:py-1.5
    "
  >
    Trade Now
    <ArrowRight size={14} className="sm:hidden" />
    <ArrowRight size={16} className="hidden sm:block" />
  </button>

</div>


      {/* Assets Row */}
      <div className="flex gap-2">
        {ASSETS.map((asset) => (
          <AssetCard key={asset.ticker} asset={asset} />
        ))}
      </div>

      {/* Footer */}
      <div className="hidden md:flex justify-end mt-4">
        <p className="text-sm font-semibold flex items-center gap-2 cursor-pointer">
          <Image src="/reward.svg" alt="Reward" width={20} height={20} />
          Earn Rewards
          <ArrowRight size={16} />
        </p>
      </div>
    </div>
  );
}
