import type { Metadata } from "next";
import PrivacyPolicy from '@/app/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how StartupHQ collects, uses, and protects your personal information.",
};

const Index = () => {
  return (
    <PrivacyPolicy />
  )
}

export default Index