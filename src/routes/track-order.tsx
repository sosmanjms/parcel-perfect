import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { BottomNav, Phone, TopBar } from "@/components/app-shell";
import { Parcel3D } from "@/components/parcel-3d";

export const Route = createFileRoute("/track-order")({
  head: () => ({
    meta: [
      { title: "Track order — Parcelo" },
      { name: "description", content: "Enter a tracking number to find your parcel." },
      { property: "og:title", content: "Track order — Parcelo" },
      { property: "og:description", content: "Enter a tracking number to find your parcel." },
    ],
  }),
  component: TrackOrder,
});

function TrackOrder() {
  return (
    <Phone className="pb-28">
      <TopBar title="Track Order" menu />
      <div className="flex flex-col items-center px-6 pt-10 text-center">
        <div className="relative h-44 w-full animate-enter-3d">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-12 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
            <Parcel3D size="lg" variant="float" />
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-bold animate-enter-up stagger-1">Where's your parcel?</h2>
        <p className="mt-2 text-sm text-muted-foreground animate-enter-up stagger-2">
          Enter your tracking number to see live status.
        </p>
        <div className="mt-6 flex w-full items-center gap-3 rounded-2xl border bg-secondary px-4 py-3.5 transition-shadow focus-within:shadow-glow animate-enter-up stagger-3">
          <Search className="size-5 text-muted-foreground" />
          <input
            placeholder="e.g. 70D2000B"
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>
        <Link
          to="/tracking"
          className="mt-4 w-full rounded-2xl bg-primary py-4 font-semibold text-primary-foreground shadow-glow-lg animate-glow-pulse pressable animate-enter-up stagger-4"
        >
          Track now
        </Link>
      </div>
      <BottomNav />
    </Phone>
  );
}
