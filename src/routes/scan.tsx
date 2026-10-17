import { createFileRoute, Link } from "@tanstack/react-router";
import { ScanLine } from "lucide-react";
import { Phone, TopBar } from "@/components/app-shell";
import boxPin from "@/assets/box-pin.png";

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
      <TopBar title="Box Scan" menu />
      <div className="px-6 pt-4 text-center">
        <div className="relative mx-auto aspect-square w-full max-w-xs rounded-3xl bg-secondary p-6">
          {["left-3 top-3 border-l-4 border-t-4 rounded-tl-2xl", "right-3 top-3 border-r-4 border-t-4 rounded-tr-2xl", "left-3 bottom-3 border-l-4 border-b-4 rounded-bl-2xl", "right-3 bottom-3 border-r-4 border-b-4 rounded-br-2xl"].map((c) => (
            <span key={c} className={`absolute size-10 border-primary ${c}`} />
          ))}
          <img src={boxPin} alt="Parcel" className="h-full w-full object-contain opacity-80" />
          <span className="absolute inset-x-6 top-1/2 h-0.5 animate-pulse bg-primary" />
        </div>
        <p className="mt-6 text-muted-foreground">Align the code on the box inside the frame</p>
        <Link to="/tracking" className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-4 font-semibold text-ink-foreground">
          <ScanLine className="size-5" />Scan box
        </Link>
      </div>
    </Phone>
  );
}
