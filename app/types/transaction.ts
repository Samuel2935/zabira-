export type TransactionStatus = "success" | "pending" | "cancelled";

export type TransactionType = "Deposit" | "Withdrawal";

export type TransactionChannel =
  | "Giftcard Sell"
  | "Crypto Pay"
  | "Airtime"
  | "Data"
  | "Fiat";

export type Transaction = {
  id: string;
  channel: TransactionChannel;
  type: TransactionType;
  amount: number;
  fee: number;
  total: number;
  reference: string;
  status: TransactionStatus;
  date: string;
};
