import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "@/components/app-shell";
import { Parcel3D } from "@/components/parcel-3d";
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
      {/* Floating ambient orbs */}
      <div className="pointer-events-none absolute -right-16 top-24 size-56 rounded-full bg-accent animate-float-slow animate-blob opacity-80" />
      <div className="pointer-events-none absolute -right-6 top-64 size-24 rounded-full bg-primary/25 animate-float" />
      <div className="pointer-events-none absolute left-[-20%] top-[40%] size-40 rounded-full bg-primary/10 animate-float-slow" />

      {/* Mini floating 3D parcels in the sky */}
      <div className="pointer-events-none absolute left-6 top-28 z-10 opacity-90">
        <Parcel3D size="sm" variant="float" />
      </div>
      <div className="pointer-events-none absolute right-8 top-48 z-10 opacity-70">
        <Parcel3D size="sm" variant="tilt" />
      </div>

      <div className="relative flex justify-end px-6 pt-6 animate-enter-fade">
        <Link
          to="/login"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Skip
        </Link>
      </div>

      <div className="relative flex flex-1 items-end justify-center px-6 animate-enter-up stagger-1">
        <div className="relative perspective-scene">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/15 blur-2xl animate-glow-pulse" />
          <img
            src={courier}
            alt="Smiling courier holding a parcel"
            className="relative max-h-[420px] w-full rounded-3xl object-cover shadow-3d animate-tilt-idle"
          />
        </div>
      </div>

      <div className="relative px-6 pb-10 pt-8 animate-enter-up stagger-2">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
          Sending parcels made simple
        </h1>
        <p className="mt-3 text-muted-foreground">Fast, secure, and reliable delivery</p>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2 w-6 rounded-full bg-ink" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
          </div>
          <Link
            to="/login"
            className="grid size-16 place-items-center rounded-full bg-ink text-xl font-bold text-ink-foreground shadow-glow-lg animate-glow-pulse pressable transition-transform hover:scale-110"
          >
            1
          </Link>
        </div>
      </div>
    </Phone>
  );
}
