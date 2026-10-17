import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone as PhoneIcon, Send, X } from "lucide-react";
import { PackageStack, Phone } from "@/components/app-shell";
import { ParticleField } from "@/components/effects";
import watch from "@/assets/watch.jpg";
import courier from "@/assets/courier.jpg";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Live tracking — Parcelo" },
      {
        name: "description",
        content: "Follow your parcel live on the map and contact your driver.",
      },
      { property: "og:title", content: "Live tracking — Parcelo" },
      {
        property: "og:description",
        content: "Follow your parcel live on the map and contact your driver.",
      },
    ],
  }),
  component: Tracking,
});

function Tracking() {
  return (
    <Phone className="bg-map">
      <ParticleField count={8} className="opacity-30 z-10" />
      <div className="absolute inset-0 animate-enter-fade">
        <svg viewBox="0 0 400 860" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          {[
            [20, 40, 140, 120],
            [190, 30, 180, 150],
            [30, 210, 120, 160],
            [200, 230, 170, 110],
            [40, 420, 150, 130],
            [230, 390, 140, 170],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="10" className="fill-map-block" />
          ))}
          <g className="stroke-map-road" strokeWidth="18" fill="none">
            <path d="M0 185 H400" />
            <path d="M0 380 H400" />
            <path d="M170 0 V860" />
            <path d="M0 600 L400 520" />
          </g>
          <path
            d="M120 140 C 180 220, 160 320, 230 380 S 260 520, 300 560"
            fill="none"
            className="stroke-primary/25"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M120 140 C 180 220, 160 320, 230 380 S 260 520, 300 560"
            fill="none"
            className="stroke-primary animate-route-dash"
            strokeWidth="4"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
          <text x="20" y="178" className="fill-muted-foreground text-[11px]">3rd Ave</text>
          <text x="180" y="300" className="fill-muted-foreground text-[11px]">7th St</text>
          <text x="40" y="300" className="fill-muted-foreground text-[11px]">Ashok Nagar</text>
          <text x="245" y="470" className="fill-muted-foreground text-[11px]">SDAT Cricket Ground</text>
        </svg>

        {/* Glowing dot traveling the route */}
        <div className="absolute inset-0" style={{ width: 400, height: 860, maxWidth: "100%" }}>
          <div
            className="route-mover absolute"
            style={{
              offsetPath: 'path("M 26% 12% C 40% 25%, 38% 38%, 52% 45% S 62% 58%, 71% 61%")',
            }}
          />
        </div>

        <div className="absolute left-[26%] top-[12%]">
          <span className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 animate-ping-soft" />
          <span className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 animate-ring-pulse" />
          <MapPin className="relative size-9 fill-ink text-card drop-shadow-md" />
        </div>
        <div className="absolute left-[71%] top-[61%]">
          <span className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 animate-ping-soft" style={{ animationDelay: "0.6s" }} />
          <span className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 animate-ring-pulse" style={{ animationDelay: "0.4s" }} />
          <MapPin className="relative size-9 fill-ink text-card drop-shadow-md" />
        </div>
      </div>

      <Link
        to="/home"
        aria-label="Close"
        className="absolute right-5 top-6 z-20 grid size-11 place-items-center rounded-full bg-ink text-ink-foreground pressable transition-transform hover:scale-110 hover:rotate-90 animate-enter-scale"
      >
        <X className="size-5" />
      </Link>

      <div className="absolute inset-x-0 bottom-0 z-20 rounded-t-[2rem] bg-card/95 p-5 shadow-3d backdrop-blur-md animate-enter-up neon-border">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />
        <div className="flex items-center gap-3">
          <img
            src={watch}
            alt="Rolex Daytona"
            className="size-12 rounded-full object-cover ring-2 ring-primary/30 animate-glow-pulse"
          />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Order ID</p>
            <p className="font-semibold">#70D20800B</p>
          </div>
          <span className="rounded-full bg-ink px-3 py-1 text-xs text-ink-foreground animate-magnetic">Transit</span>
          <PackageStack />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-secondary p-3 transition-all hover:shadow-glow hover-lift">
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Send className="size-3.5 text-primary" />
              Sender
            </p>
            <p className="mt-1 font-semibold">Dubai, UAE</p>
          </div>
          <div className="rounded-2xl bg-secondary p-3 transition-all hover:shadow-glow hover-lift">
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              Receiver
            </p>
            <p className="mt-1 font-semibold">Aden, UAE</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <img
            src={courier}
            alt="Driver Richard Dheo"
            className="size-12 rounded-full object-cover object-top ring-2 ring-primary/20"
          />
          <div className="flex-1">
            <p className="font-semibold">Richard Dheo</p>
            <p className="text-xs text-muted-foreground">Your courier</p>
          </div>
          <button
            aria-label="Call"
            className="grid size-11 place-items-center rounded-full border bg-card pressable transition-transform hover:scale-110"
          >
            <PhoneIcon className="size-5" />
          </button>
          <button
            aria-label="Chat"
            className="energy-btn grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow-lg animate-glow-pulse pressable"
          >
            <MessageCircle className="size-5" />
          </button>
        </div>
      </div>
    </Phone>
  );
}
