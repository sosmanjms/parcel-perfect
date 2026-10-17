import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone as PhoneIcon, Send, X } from "lucide-react";
import { PackageStack, Phone } from "@/components/app-shell";
import watch from "@/assets/watch.jpg";
import courier from "@/assets/courier.jpg";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Live tracking — Parcelo" },
      { name: "description", content: "Follow your parcel live on the map and contact your driver." },
      { property: "og:title", content: "Live tracking — Parcelo" },
      { property: "og:description", content: "Follow your parcel live on the map and contact your driver." },
    ],
  }),
  component: Tracking,
});

function Tracking() {
  return (
    <Phone className="bg-map">
      <div className="absolute inset-0">
        <svg viewBox="0 0 400 860" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          {[[20, 40, 140, 120], [190, 30, 180, 150], [30, 210, 120, 160], [200, 230, 170, 110], [40, 420, 150, 130], [230, 390, 140, 170]].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="10" className="fill-map-block" />
          ))}
          <g className="stroke-map-road" strokeWidth="18" fill="none">
            <path d="M0 185 H400" /><path d="M0 380 H400" /><path d="M170 0 V860" /><path d="M0 600 L400 520" />
          </g>
          <path d="M120 140 C 180 220, 160 320, 230 380 S 260 520, 300 560" fill="none" className="stroke-primary" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" />
          <text x="20" y="178" className="fill-muted-foreground text-[11px]">3rd Ave</text>
          <text x="180" y="300" className="fill-muted-foreground text-[11px]">7th St</text>
          <text x="40" y="300" className="fill-muted-foreground text-[11px]">Ashok Nagar</text>
          <text x="245" y="470" className="fill-muted-foreground text-[11px]">SDAT Cricket Ground</text>
        </svg>
        <MapPin className="absolute left-[26%] top-[12%] size-9 fill-ink text-card" />
        <MapPin className="absolute left-[71%] top-[61%] size-9 fill-ink text-card" />
      </div>
      <Link to="/home" aria-label="Close" className="absolute right-5 top-6 grid size-11 place-items-center rounded-full bg-ink text-ink-foreground">
        <X className="size-5" />
      </Link>

      <div className="absolute inset-x-0 bottom-0 rounded-t-[2rem] bg-card p-5 shadow-soft">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />
        <div className="flex items-center gap-3">
          <img src={watch} alt="Rolex Daytona" className="size-12 rounded-full object-cover" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Order ID</p>
            <p className="font-semibold">#70D20800B</p>
          </div>
          <span className="rounded-full bg-ink px-3 py-1 text-xs text-ink-foreground">Transit</span>
          <PackageStack />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-secondary p-3">
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><Send className="size-3.5 text-primary" />Sender</p>
            <p className="mt-1 font-semibold">Dubai, UAE</p>
          </div>
          <div className="rounded-2xl bg-secondary p-3">
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="size-3.5 text-primary" />Receiver</p>
            <p className="mt-1 font-semibold">Aden, UAE</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <img src={courier} alt="Driver Richard Dheo" className="size-12 rounded-full object-cover object-top" />
          <div className="flex-1">
            <p className="font-semibold">Richard Dheo</p>
            <p className="text-xs text-muted-foreground">Your courier</p>
          </div>
          <button aria-label="Call" className="grid size-11 place-items-center rounded-full border bg-card"><PhoneIcon className="size-5" /></button>
          <button aria-label="Chat" className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow"><MessageCircle className="size-5" /></button>
        </div>
      </div>
    </Phone>
  );
}
