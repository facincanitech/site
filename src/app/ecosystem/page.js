"use client";

import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import ArmSection from "@/components/ecosystem/ArmSection";
import ConnectiveSection from "@/components/ecosystem/ConnectiveSection";
import { useLocale } from "@/lib/locale-context";

export default function Ecosystem() {
  const { t } = useLocale();
  const e = t.ecosystem;

  return (
    <>
      <EcosystemHero e={e} />
      {e.arms.map((arm, i) => (
        <ArmSection key={arm.index} arm={arm} alt={i % 2 === 1} />
      ))}
      <ConnectiveSection connective={e.connective} />
    </>
  );
}
