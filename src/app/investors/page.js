"use client";

import MarketOpportunity from "@/components/investors/MarketOpportunity";
import RevenueStreams from "@/components/investors/RevenueStreams";
import Scalability from "@/components/investors/Scalability";
import EsgImpact from "@/components/investors/EsgImpact";
import Roadmap from "@/components/investors/Roadmap";
import Partners from "@/components/investors/Partners";
import ExpansionTimeline from "@/components/investors/ExpansionTimeline";
import Governance from "@/components/investors/Governance";
import { useLocale } from "@/lib/locale-context";

export default function Investors() {
  const { t } = useLocale();
  const inv = t.investors;

  return (
    <>
      <MarketOpportunity market={inv.market} />
      <RevenueStreams revenue={inv.revenue} />
      <Scalability scalability={inv.scalability} />
      <EsgImpact esg={inv.esg} />
      <Roadmap roadmap={inv.roadmap} />
      <Partners partners={inv.partners} />
      <ExpansionTimeline expansion={inv.expansion} />
      <Governance governance={inv.governance} />
    </>
  );
}
