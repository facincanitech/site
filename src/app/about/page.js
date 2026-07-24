"use client";

import AboutHero from "@/components/about/AboutHero";
import OriginSection from "@/components/about/OriginSection";
import MissionSection from "@/components/about/MissionSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import SynthesisSection from "@/components/about/SynthesisSection";
import { useLocale } from "@/lib/locale-context";

export default function About() {
  const { t } = useLocale();
  const a = t.about;

  return (
    <>
      <AboutHero a={a} />
      <OriginSection a={a} />
      <MissionSection a={a} />
      <PhilosophySection a={a} />
      <SynthesisSection a={a} />
    </>
  );
}
