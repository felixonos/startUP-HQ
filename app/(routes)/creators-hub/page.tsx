import type { Metadata } from "next";
import Grow from "@/app/components/Grow";

export const metadata: Metadata = {
  title: "Creators Hub",
  description:
    "Legal support for creators and influencers. Protect your brand, intellectual property, and content with StartupHQ's creator-focused legal plans.",
};

const Index = () => {
  return <Grow />;
};

export default Index;
