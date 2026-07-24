"use client";

import JournalHero from "@/components/journal/JournalHero";
import JournalStub from "@/components/journal/JournalStub";
import { useLocale } from "@/lib/locale-context";

export default function Journal() {
  const { t } = useLocale();

  return (
    <>
      <JournalHero j={t.journal} />
      <JournalStub j={t.journal} />
    </>
  );
}
