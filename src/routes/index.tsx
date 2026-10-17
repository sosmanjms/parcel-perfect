import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "@/components/app-shell";
import { Parcel3D } from "@/components/parcel-3d";
import { ParticleField, EnergyRings, TextReveal } from "@/components/effects";
import courier from "@/assets/courier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parcelo — Sending parcels made simple" },
      {
        name: "description",
        content: "Fast, secure, and reliable parcel delivery and live tracking.",
      },
      { property: "og:title", content: "Parcelo — Sending parcels made simple" },
      {
        property: "og:description",
        content: "Fast, secure, and reliable parcel delivery and live tracking.",
      },
    ],
  }),
  component: Onboarding,
});

function Onboarding() {
  return (
    <Phone className="flex flex-col">
      <div className="pointer-events-none absolute inset-0 aurora-bg opacity-60" />
      <ParticleField count={22} />

      <div className="pointer-events-none absolute -right-16 top-24 size-56 rounded-full bg-accent animate-float-slow animate-blob opacity-70" />
      <div className="pointer-events-none absolute -right-6 top-64 size-24 rounded-full bg-primary/25 animate-float" />
      <div className="pointer-events-none absolute left-[-20%] top-[40%] size-40 rounded-full bg-primary/10 animate-float-slow" />

      <div className="pointer-events-none absolute left-4 top-24 z-10 opacity-90">
        <Parcel3D size="sm" variant="float" />
      </div>
      <div className="pointer-events-none absolute right-6 top-44 z-10 opacity-75">
        <Parcel3D size="sm" variant="tilt" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-20 z-0 -translate-x-1/2 opacity-40">
        <EnergyRings size={200} />
      </div>

      <div className="relative z-10 flex justify-end px-6 pt-6 animate-enter-fade">
        <Link
          to="/login"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Skip
        </Link>
      </div>

      <div className="relative z-10 flex flex-1 items-end justify-center px-6 animate-enter-up stagger-1">
        <div className="relative perspective-scene">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl animate-glow-pulse" />
          <EnergyRings size={280} className="opacity-50" />
          <img
            src={courier}
            alt="Smiling courier holding a parcel"
            className="relative max-h-[400px] w-full rounded-3xl object-cover shadow-3d animate-tilt-idle"
          />
        </div>
      </div>

      <div className="relative z-10 px-6 pb-10 pt-8 animate-enter-up stagger-2">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight animate-text-glow">
          <TextReveal text="Sending parcels" />
          <br />
          <TextReveal text="made simple" />
        </h1>
        <p className="mt-3 text-muted-foreground animate-enter-fade stagger-4">
          Fast, secure, and reliable delivery
        </p>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2 w-6 rounded-full bg-ink" />
            <span className="size-2 rounded-full bg-border animate-twinkle" />
            <span className="size-2 rounded-full bg-border animate-twinkle" style={{ animationDelay: "0.5s" }} />
          </div>
          <Link
            to="/login"
            className="energy-btn grid size-16 place-items-center rounded-full bg-ink text-xl font-bold text-ink-foreground shadow-glow-lg animate-glow-pulse pressable transition-transform hover:scale-110 animate-magnetic"
          >
            1
          </Link>
        </div>
      </div>
    </Phone>
  );
}
