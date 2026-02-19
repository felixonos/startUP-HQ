import type { Metadata } from "next";
import About from '@/app/components/About';

export const metadata: Metadata = {
  title: "About Us",
  description:
    "StartupHQ is a legal compliance advisory firm built for African startups. We help founders launch with confidence, stay compliant, and scale sustainably.",
};

const Index = () => {
  return (
   <About />
  )
}

export default Index;