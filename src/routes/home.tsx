import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Check, MapPin, QrCode, Search, Send } from "lucide-react";
import { BottomNav, PackageStack, Phone } from "@/components/app-shell";
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
      <section className="pattern-ink rounded-b-[2rem] px-5 pb-8 pt-6 text-ink-foreground">
        <div className="flex items-center justify-between">
          <div className="grid size-11 place-items-center rounded-full bg-primary font-bold">B</div>
          <button aria-label="Notifications" className="relative grid size-11 place-items-center rounded-full bg-ink-foreground/10">
            <Bell className="size-5" />
            <span className="absolute right-3 top-3 size-2 rounded-full bg-primary" />
          </button>
        </div>
        <h1 className="mt-6 text-3xl font-bold">Hello, Brandon! 👋</h1>
        <Link to="/scan" className="mt-5 flex items-center gap-3 rounded-2xl bg-card px-4 py-3.5 text-muted-foreground">
          <Search className="size-5" />
          <span className="flex-1 text-sm">Track your parcel</span>
          <QrCode className="size-5 text-foreground" />
        </Link>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link to="/send" className="flex items-center gap-3 rounded-2xl bg-card p-4 font-semibold text-foreground">
            <span className="grid size-9 place-items-center rounded-full bg-accent text-primary"><Send className="size-4" /></span>Send parcel
          </Link>
          <Link to="/tracking" className="flex items-center gap-3 rounded-2xl bg-card p-4 font-semibold text-foreground">
            <span className="grid size-9 place-items-center rounded-full bg-accent text-primary"><MapPin className="size-4" /></span>Track order
          </Link>
        </div>
      </section>

      <section className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Active delivery</h2>
          <span className="text-sm text-muted-foreground">See all</span>
        </div>
        <div className="mt-4 space-y-4">
          {deliveries.map((d) => (
            <Link key={d.id} to="/tracking" className="block rounded-3xl border bg-card p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <img src={d.img} alt={d.name} className="size-12 rounded-full object-cover" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">ID: {d.id}</p>
                  <p className="font-semibold">{d.name}</p>
                </div>
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-ink-foreground">Transit</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="grid size-5 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" /></span>
                    <span className="h-0.5 flex-1 bg-primary" />
                    <span className="size-2.5 rounded-full bg-primary" />
                    <span className="h-0.5 flex-1 border-t-2 border-dashed border-primary/40" />
                    <span className="size-2.5 rounded-full bg-border" />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>{d.from}</span><span>{d.to}</span>
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
