import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & AMAs | Klyth",
  description: "Secure closed-door sessions with industry leaders and financial experts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
