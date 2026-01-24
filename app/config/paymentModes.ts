
export type PaymentMode = {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
};

export const PAYMENT_MODES: PaymentMode[] = [
  {
    id: "card",
    name: "Giftcard",
    description: "Trade giftcards easily and fast.",
    logoUrl: "/giftcard.svg",
  },
  {
    id: "crypto",
    name: "Crypto",
    description: "Quickly trade cryptocurrencies",
    logoUrl: "/crypto.svg",
  },
  {
    id: "bills",
    name: "Pay Bills",
    description: "Airtime, data, cable, betting, electricity.",
    logoUrl: "/bill.svg",
  },
  {
    id: "link",
    name: "Pay Link",
    description: "Get paid in seconds with payment links.",
    logoUrl: "/link.svg",
  },
  {
    id: "rates",
    name: "Rates",
    description: "Check current rates in realtime.",
    logoUrl: "/rates.svg",
  },
  {
    id: "betting",
    name: "Betting",
    description: "Fund betting accounts fast.",
    logoUrl: "/betting.svg",
  },
];
