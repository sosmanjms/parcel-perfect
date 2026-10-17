import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Check, MapPin, QrCode, Search, Send } from "lucide-react";
import { BottomNav, PackageStack, Phone } from "@/components/app-shell";
import { ParticleField, TextReveal } from "@/components/effects";
import watch from "@/assets/watch.jpg";
import mini from "@/assets/mini.jpg";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Home — Parcelo" },
      { name: "description", content: "Send parcels and follow your active deliveries." },
      { property: "og:title", content: "Home — Parcelo" },
      { property: "og:description", content: "Send parcels and follow your active deliveries." },
    ],
  }),
  component: HomePage,
});

const deliveries = [
  { id: "70D2000B", name: "Rolex Daytona", img: watch, from: "Dubai", to: "Ajman" },
  { id: "60D2300B", name: "Mac mini", img: mini, from: "Sharjah", to: "Abu Dhabi" },
];

function HomePage() {
  return (
    <Phone className="pb-28">
      <section className="pattern-ink relative overflow-hidden rounded-b-[2rem] px-5 pb-8 pt-6 text-ink-foreground">
        <ParticleField count={12} className="opacity-40" />
        <div className="relative z-10 flex items-center justify-between">
          <div className="grid size-11 place-items-center rounded-full bg-primary font-bold shadow-glow animate-enter-scale animate-glow-pulse">
            B
          </div>
          <button
            aria-label="Notifications"
            className="relative grid size-11 place-items-center rounded-full bg-ink-foreground/10 transition-transform hover:scale-110 pressable"
          >
            <Bell className="size-5" />
            <span className="absolute right-3 top-3 size-2 rounded-full bg-primary">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping-soft" />
            </span>
          </button>
        </div>
        <h1 className="relative z-10 mt-6 text-3xl font-bold animate-enter-up stagger-1 animate-text-glow">
          <TextReveal text="Hello, Brandon! 👋" />
        </h1>
        <Link
          to="/scan"
          className="relative z-10 mt-5 flex items-center gap-3 rounded-2xl bg-card px-4 py-3.5 text-muted-foreground transition-all hover:shadow-glow animate-enter-up stagger-2 pressable neon-border"
        >
          <Search className="size-5" />
          <span className="flex-1 text-sm">Track your parcel</span>
          <QrCode className="size-5 text-foreground animate-twinkle" />
        </Link>
        <div className="relative z-10 mt-4 grid grid-cols-2 gap-3 animate-enter-up stagger-3 perspective-scene">
          <Link
            to="/send"
            className="flex items-center gap-3 rounded-2xl bg-card p-4 font-semibold text-foreground hover-tilt pressable neon-border"
          >
            <span className="grid size-9 place-items-center rounded-full bg-accent text-primary animate-bounce-soft">
              <Send className="size-4" />
            </span>
            Send parcel
          </Link>
          <Link
            to="/tracking"
            className="flex items-center gap-3 rounded-2xl bg-card p-4 font-semibold text-foreground hover-tilt pressable neon-border"
          >
            <span className="grid size-9 place-items-center rounded-full bg-accent text-primary animate-bounce-soft" style={{ animationDelay: "0.2s" }}>
              <MapPin className="size-4" />
            </span>
            Track order
          </Link>
        </div>
      </section>

      <section className="px-5 pt-6">
        <div className="flex items-center justify-between animate-enter-up stagger-3">
          <h2 className="text-lg font-bold">Active delivery</h2>
          <span className="text-sm text-muted-foreground">See all</span>
        </div>
        <div className="mt-4 space-y-4 perspective-scene">
          {deliveries.map((d, i) => (
            <Link
              key={d.id}
              to="/tracking"
              className={`block rounded-3xl border bg-card p-4 shadow-soft hover-tilt pressable neon-border animate-enter-3d stagger-${i + 4}`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={d.img}
                  alt={d.name}
                  className="size-12 rounded-full object-cover ring-2 ring-primary/20 animate-glow-pulse"
                />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">ID: {d.id}</p>
                  <p className="font-semibold">{d.name}</p>
                </div>
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-ink-foreground animate-magnetic">
                  Transit
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="grid size-5 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3" />
                    </span>
                    <span className="h-0.5 flex-1 progress-live rounded-full" />
                    <span className="size-2.5 rounded-full bg-primary ring-4 ring-primary/20 animate-ping-soft" />
                    <span className="h-0.5 flex-1 border-t-2 border-dashed border-primary/40" />
                    <span className="size-2.5 rounded-full bg-border" />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>{d.from}</span>
                    <span>{d.to}</span>
                  </div>
                </div>
                <PackageStack />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <BottomNav />
    </Phone>
  );
}
