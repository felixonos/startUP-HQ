import Complaints from "./components/Home/Complaints";
import Faqs from "./components/Home/Faqs";
import Subscriptions from "./components/Home/Subscription";
import Testimonials from "./components/Home/Testimonials";
import WhatWeDo from "./components/Home/WhatWeDo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-16 ">
      <Complaints />
      <WhatWeDo />
      <Subscriptions />
      <Testimonials />
      <Faqs />
    </div>
  );
}
