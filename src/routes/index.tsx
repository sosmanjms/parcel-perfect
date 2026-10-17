import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "@/components/app-shell";
import courier from "@/assets/courier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parcelo — Sending parcels made simple" },
      { name: "description", content: "Fast, secure, and reliable parcel delivery and live tracking." },
      { property: "og:title", content: "Parcelo — Sending parcels made simple" },
      { property: "og:description", content: "Fast, secure, and reliable parcel delivery and live tracking." },
    ],
  }),
  component: Onboarding,
});

function Onboarding() {
  return (
    <Phone className="flex flex-col">
      <div className="absolute -right-16 top-24 size-56 rounded-full bg-accent" />
      <div className="absolute -right-6 top-64 size-24 rounded-full bg-primary/20" />
      <div className="relative flex justify-end px-6 pt-6">
        <Link to="/home" className="text-sm text-muted-foreground">Skip</Link>
      </div>
      <div className="relative flex flex-1 items-end justify-center px-6">
        <img src={courier} alt="Smiling courier holding a parcel" className="max-h-[480px] w-full rounded-3xl object-cover" />
      </div>
      <div className="relative px-6 pb-10 pt-8">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">Sending parcels made simple</h1>
        <p className="mt-3 text-muted-foreground">Fast, secure, and reliable delivery</p>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2 w-6 rounded-full bg-ink" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
          </div>
          <Link to="/home" className="grid size-16 place-items-center rounded-full bg-ink text-xl font-bold text-ink-foreground">1</Link>
        </div>
      </div>
    </Phone>
  );
}
