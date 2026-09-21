import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { FeatureStrip } from "@/components/site/FeatureStrip";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureStrip />
    </main>
  );
}