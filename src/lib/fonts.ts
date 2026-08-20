import { Inter, Public_Sans } from "next/font/google";

// Font pairing locked by the Stitch design system (ai/research/design-system.md) —
// clean, neutral sans-on-sans pairing distinct from every other pairing in this batch,
// chosen for a calm, documentation-clear tone rather than an editorial or salesy one.
export const bodyFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
