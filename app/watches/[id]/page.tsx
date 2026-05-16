import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { watches } from "@/lib/watches";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WatchDetail from "@/components/WatchDetail";

type Params = { id: string };

export async function generateStaticParams() {
  return watches.map((w) => ({ id: w.id }));
}

export function generateMetadata({
  params
}: {
  params: Params;
}): Metadata {
  const watch = watches.find((w) => w.id === params.id);
  if (!watch) return { title: "Watch — Watch Square" };
  return {
    title: `${watch.brand} ${watch.model} — Watch Square`,
    description: watch.notes
  };
}

export default function WatchPage({ params }: { params: Params }) {
  const watch = watches.find((w) => w.id === params.id);
  if (!watch) notFound();

  const others = watches.filter((w) => w.id !== watch.id);

  return (
    <main className="relative w-full max-w-full overflow-x-hidden bg-ivory text-ink">
      <Navigation />
      <WatchDetail watch={watch} others={others} />
      <Footer />
    </main>
  );
}
