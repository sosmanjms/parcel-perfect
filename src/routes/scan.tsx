import { createFileRoute, Link } from "@tanstack/react-router";
import { ScanLine } from "lucide-react";
import { Phone, TopBar } from "@/components/app-shell";
import { Parcel3D } from "@/components/parcel-3d";
import { ParticleField, EnergyRings } from "@/components/effects";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Box scan — Parcelo" },
      { name: "description", content: "Scan a parcel code to find it instantly." },
      { property: "og:title", content: "Box scan — Parcelo" },
      { property: "og:description", content: "Scan a parcel code to find it instantly." },
    ],
  }),
  component: Scan,
});

function Scan() {
  return (
    <Phone>
      <ParticleField count={10} className="opacity-50" />
      <TopBar title="Box Scan" menu />
      <div className="relative z-10 px-6 pt-4 text-center animate-enter-up">
        <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-3xl bg-secondary p-6 neon-border perspective-scene">
          <EnergyRings size={260} className="opacity-40" />
          {[
            "left-3 top-3 border-l-4 border-t-4 rounded-tl-2xl",
            "right-3 top-3 border-r-4 border-t-4 rounded-tr-2xl",
            "left-3 bottom-3 border-l-4 border-b-4 rounded-bl-2xl",
            "right-3 bottom-3 border-r-4 border-b-4 rounded-br-2xl",
          ].map((c) => (
            <span key={c} className={`absolute size-10 border-primary animate-twinkle ${c}`} />
          ))}
          <div className="relative z-10 flex h-full items-center justify-center">
            <Parcel3D size="md" variant="float" />
          </div>
          <span className="absolute inset-x-8 z-20 h-0.5 bg-primary shadow-[0_0_16px_4px] shadow-primary/90 animate-scan-line" />
          <span className="absolute inset-x-4 z-20 h-12 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent animate-scan-line pointer-events-none" />
        </div>
        <p className="mt-6 text-muted-foreground animate-enter-fade stagger-2">
          Align the code on the box inside the frame
        </p>
        <Link
          to="/tracking"
          className="energy-btn mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-4 font-semibold text-ink-foreground pressable shadow-glow-lg animate-enter-up stagger-3 hover:scale-[1.02] transition-transform animate-magnetic"
        >
          <ScanLine className="size-5 animate-twinkle" />
          Scan box
        </Link>
      </div>
    </Phone>
  );
}
