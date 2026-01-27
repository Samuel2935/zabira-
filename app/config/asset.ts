export type Asset = {
  id: string;
  name: string;
  ticker: string;
  logoUrl: string;
  changePercent: number;
};

export const ASSETS: Asset[] = [
  {
    id: "btc",
    name: "Bitcoin",
    ticker: "BTC",
    logoUrl: "/Bitcoin.svg",
    changePercent: 3.45,
  },
  {
    id: "eth",
    name: "Ethereum",
    ticker: "ETH",
    logoUrl: "/Ethereum.svg",
    changePercent: -1.12,
  },
  {
    id: "usdt",
    name: "Tether",
    ticker: "USDT",
    logoUrl: "/Tether.svg",
    changePercent: 0.01,
  },
  {
    id: "amzn",
    name: "Amazon",
    ticker: "AMZN",
    logoUrl: "/Amazon.svg",
    changePercent: -2.3,
  },
  {
    id: "spot",
    name: "Spotify",
    ticker: "SPOT",
    logoUrl: "/Spotify.png.svg",
    changePercent: 4.1,
  },
];
