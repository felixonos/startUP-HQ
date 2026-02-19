import type { Metadata } from "next";
import Complaints from "./components/Home/Complaints";
import Faqs from "./components/Home/Faqs";
import StayConnected from "./components/Home/StayConnected";
import Subscriptions from "./components/Home/Subscription";
import Testimonials from "./components/Home/Testimonials";
import WhatWeDo from "./components/Home/WhatWeDo";

export const metadata: Metadata = {
  title: "StartupHQ — Startup Compliance Advisory for African Founders",
  description:
    "Build right from day one. StartupHQ provides legal compliance advisory for Nigerian and African founders — business registration, tax compliance, IP protection, and more.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-16 ">
      <Complaints />
      <WhatWeDo />
      <Subscriptions />
      <Testimonials />
      <Faqs />
      <StayConnected/>
    </div>
  );
}
