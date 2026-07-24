"use client";

import PitchHero from "@/components/investors/PitchHero";
import EcosystemPillars from "@/components/investors/EcosystemPillars";
import MarketMetrics from "@/components/investors/MarketMetrics";
import InvestmentThesis from "@/components/investors/InvestmentThesis";
import DataRoomCTA from "@/components/investors/DataRoomCTA";
import { useLocale } from "@/lib/locale-context";

export default function Investors() {
  const { t } = useLocale();
  const inv = t.investors;

  return (
    <>
      <PitchHero hero={inv.hero} />
      <EcosystemPillars pillars={inv.pillars} />
      <MarketMetrics market={inv.market} />
      <InvestmentThesis thesis={inv.thesis} />
      <DataRoomCTA dataroom={inv.dataroom} />
    </>
  );
}
