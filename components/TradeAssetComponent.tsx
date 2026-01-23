"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AssetCard from "./AssetCard";
import { ASSETS } from "@/app/config/asset";

export default function TradeAssetCardComponent() {
  return (
    <div className="w-167 h-59.5 justify-between  bg-white p-2 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <Image
            src="/lighting.svg"
            alt="Trading Icon"
            width={20}
            height={20}
          />
          Top traded assets this week
        </p>

        <button className="flex items-center gap-2 text-sm bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800">
          Trade Now
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Assets Row */}
      <div className="flex gap-2">
        {ASSETS.map((asset) => (
          <AssetCard key={asset.ticker} asset={asset} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-4">
        <p className="text-sm font-semibold flex items-center gap-2 cursor-pointer">
          <Image src="/reward.svg" alt="Reward" width={20} height={20} />
          Earn Rewards
          <ArrowRight size={16} />
        </p>
      </div>
    </div>
  );
}
