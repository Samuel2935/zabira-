import { ASSETS } from "@/app/config/asset";
import AssetCard from "./TradeAssetComponent";

export default function TradedAssetsRow() {
  return (
   <div className="flex gap-4 overflow-hidden">
  {ASSETS.map(asset => (
    <AssetCard key={asset.ticker} />
  ))}
</div>

  );
}
