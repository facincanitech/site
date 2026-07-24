"use client";

import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhoIsNeta from "@/components/WhoIsNeta";
import Carousel from "@/components/Carousel";
import Quotes from "@/components/Quotes";
import { useLocale } from "@/lib/locale-context";

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <Hero t={t} />
      <StatsBar t={t} />
      <WhoIsNeta t={t} />
      <Carousel t={t} />
      <Quotes t={t} />
    </>
  );
}
