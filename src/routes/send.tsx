import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Package, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Phone, TopBar } from "@/components/app-shell";

export const Route = createFileRoute("/send")({
  head: () => ({
    meta: [
      { title: "Send parcel — Parcelo" },
      { name: "description", content: "Book a parcel pickup in a few taps." },
      { property: "og:title", content: "Send parcel — Parcelo" },
      { property: "og:description", content: "Book a parcel pickup in a few taps." },
    ],
  }),
  component: SendParcel,
});

const sizes = ["Small", "Medium", "Large"];

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="mt-1.5 flex items-center gap-3 rounded-2xl border bg-secondary px-4 py-3.5">
        <span className="text-primary">{icon}</span>
        <input placeholder={placeholder} className="flex-1 bg-transparent text-sm outline-none" />
      </div>
    </label>
  );
}

function SendParcel() {
  const [size, setSize] = useState("Medium");
  return (
    <Phone>
      <TopBar title="Send Parcel" />
      <form className="space-y-4 px-5 pb-10" onSubmit={(e) => { e.preventDefault(); toast.success("Pickup booked!"); }}>
        <Field icon={<Send className="size-4" />} label="Pickup address" placeholder="Dubai, UAE" />
        <Field icon={<MapPin className="size-4" />} label="Delivery address" placeholder="Ajman, UAE" />
        <Field icon={<Package className="size-4" />} label="What are you sending?" placeholder="e.g. Watch" />
        <div>
          <span className="text-xs font-medium text-muted-foreground">Parcel size</span>
          <div className="mt-1.5 grid grid-cols-3 gap-3">
            {sizes.map((s) => (
              <button type="button" key={s} onClick={() => setSize(s)}
                className={`rounded-2xl border py-4 text-sm font-semibold ${size === s ? "border-primary bg-accent text-accent-foreground" : "bg-card"}`}>
                <Package className="mx-auto mb-1 size-5" />{s}
              </button>
            ))}
          </div>
        </div>
        <button className="mt-4 w-full rounded-2xl bg-primary py-4 font-semibold text-primary-foreground shadow-glow">Continue</button>
      </form>
    </Phone>
  );
}
