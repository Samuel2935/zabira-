// components/sidebar/nav.config.ts
import {
  Home,
  Gift,
  CreditCard,
  Wallet,
  Receipt,
  Trophy,
  Settings,
} from "lucide-react";

export const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Giftcard",
    href: "/dashboard/giftcard",
    icon: Gift,
  },
  {
    label: "Bill Payment",
    href: "/dashboard/bills",
    icon: CreditCard,
  },
  {
    label: "Wallet",
    href: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: Receipt,
  },
  {
    label: "Rewards",
    href: "/dashboard/rewards",
    icon: Trophy,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
