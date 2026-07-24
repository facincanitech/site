"use client";

import LoreHero from "@/components/lore/LoreHero";
import ManifestoStrip from "@/components/lore/ManifestoStrip";
import FeaturedOils from "@/components/lore/FeaturedOils";
import CollectionIntro from "@/components/lore/CollectionIntro";
import ProductDetail from "@/components/lore/ProductDetail";
import UpcomingSection from "@/components/lore/UpcomingSection";
import { useLocale } from "@/lib/locale-context";

export default function LoreBotanical() {
  const { t } = useLocale();
  const l = t.loreBotanical;

  return (
    <>
      <LoreHero l={l} />
      <ManifestoStrip l={l} />
      <FeaturedOils l={l} />
      <CollectionIntro l={l} />
      {l.products.map((product, i) => (
        <ProductDetail
          key={product.name}
          product={product}
          labels={l.notesLabels}
          alt={i % 2 === 1}
        />
      ))}
      <UpcomingSection l={l} />
    </>
  );
}
