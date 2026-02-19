import type { Metadata } from "next";
import RefundPolicy from '@/app/components/RefundPolicy';

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "StartupHQ refund policy for our legal compliance advisory services and consultation packages.",
};

const Index = () => {
  return (
    <RefundPolicy />
  )
}

export default Index;