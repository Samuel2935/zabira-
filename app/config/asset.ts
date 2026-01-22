export type Asset = {
  id: string;
  name: string;
  ticker: string;
  logoUrl: string;
  changePercent: number; // positive for gain, negative for loss
};

export const ASSETS: Asset[] = [
  {
    id: "1",
    name: "Bitcoin",
    ticker: "BTC",
    logoUrl: "/assets/btc.png",
    changePercent: 2.4,
  },
  {
    id: "2",
    name: "Ethereum",
    ticker: "ETH",
    logoUrl: "/assets/eth.png",
    changePercent: -1.2,
  },
  {
    id: "3",
    name: "Solana",
    ticker: "SOL",
    logoUrl: "/assets/sol.png",
    changePercent: 5.1,
  },
];
