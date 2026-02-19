import type { Metadata } from "next";
import Terms from "@/app/components/Terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the StartupHQ terms of service governing the use of our legal compliance advisory services.",
};

const Index = () => {
  return <Terms />;
};

export default Index;
