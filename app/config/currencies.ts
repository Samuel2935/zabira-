import { Currency, CurrencyCode } from "@/app/types/currency";

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  NGN: {
    code: "NGN",
    symbol: "₦",
    country: "Nigeria",
    flagUrl: "https://flagcdn.com/w40/ng.png",
    locale: "en-NG",
  },
  USD: {
    code: "USD",
    symbol: "$",
    country: "United States",
    flagUrl: "https://flagcdn.com/w40/us.png",
    locale: "en-US",
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    country: "United Kingdom",
    flagUrl: "https://flagcdn.com/w40/gb.png",
    locale: "en-GB",
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    country: "Eurozone",
    flagUrl: "https://flagcdn.com/w40/eu.png",
    locale: "de-DE",
  },
};
