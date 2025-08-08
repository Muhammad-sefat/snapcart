import ContactForm from "@/components/ContactForm";
import HomeBanner from "@/components/homecomponents/HomeBanner";
import HomeCard from "@/components/homecomponents/HomeCard";
import ServiceSection from "@/components/homecomponents/ServiceSection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCard />
      <ServiceSection />
      <ContactForm />
    </>
  );
}
