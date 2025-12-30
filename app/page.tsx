import Complaints from "./components/Home/Complaints";
import Faqs from "./components/Home/Faqs";
import Subscriptions from "./components/Home/Subscription";
import Testimonials from "./components/Home/Testimonials";
import WhatWeDo from "./components/Home/WhatWeDo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Complaints />
      <WhatWeDo />
      <Subscriptions />
      <Testimonials />
      <Faqs />

    </main>
  );
}
