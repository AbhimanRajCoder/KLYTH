import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ecosystem | Klyth",
  description: "Explore the Klyth financial ecosystem.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
