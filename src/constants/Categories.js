import {
  UtensilsCrossed,
  Car,
  ShoppingBag,
  Zap,
  Film,
  HeartPulse,
  MoreHorizontal,
} from "lucide-react";

// ---- Category config: icon + color live in one place ----------------------
export const CATEGORIES = {
  Food: { icon: UtensilsCrossed, color: "#F97316", bg: "#FFF1E6" },
  Transport: { icon: Car, color: "#3B82F6", bg: "#E8F0FE" },
  Shopping: { icon: ShoppingBag, color: "#A855F7", bg: "#F5EBFE" },
  Bills: { icon: Zap, color: "#EF4444", bg: "#FEECEC" },
  Entertainment: { icon: Film, color: "#EC4899", bg: "#FDEAF3" },
  Health: { icon: HeartPulse, color: "#10B981", bg: "#E7F8F1" },
  Other: { icon: MoreHorizontal, color: "#64748B", bg: "#EEF1F5" },
};
