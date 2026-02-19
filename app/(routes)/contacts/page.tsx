import type { Metadata } from "next";
import Contacts from '@/app/components/Contacts';

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with StartupHQ. Reach out for legal compliance advisory, business registration support, or schedule a consultation.",
};

const Index = () => {
  return (
    <Contacts />
  )
}

export default Index