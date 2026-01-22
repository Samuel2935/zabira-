export type CurrencyCode = "NGN" | "USD" | "GBP" | "EUR";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  country: string;
  flagUrl: string;
  locale: string;
}
