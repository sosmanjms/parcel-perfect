import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CreditCard, LogOut, Package, User } from "lucide-react";
import { BottomNav, Phone } from "@/components/app-shell";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Parcelo" },
      { name: "description", content: "Manage your orders, payments and account." },
      { property: "og:title", content: "Profile — Parcelo" },
      { property: "og:description", content: "Manage your orders, payments and account." },
    ],
  }),
  component: Profile,
});

const items = [
  { icon: Package, label: "Orders" },
  { icon: CreditCard, label: "Payments" },
  { icon: User, label: "Account" },
];

function Profile() {
  return (
    <Phone className="pb-28">
      <div className="flex flex-col items-center px-6 pt-12">
        <div className="rounded-full p-1.5 ring-4 ring-primary">
          <div className="grid size-24 place-items-center rounded-full bg-ink text-3xl font-bold text-ink-foreground">
            B
          </div>
        </div>
        <h1 className="mt-4 text-2xl font-bold">Brandon D.</h1>
        <p className="text-sm text-muted-foreground">brandon@parcelo.app</p>
      </div>
      <ul className="mt-8 space-y-2 px-5">
        {items.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-4 rounded-2xl bg-secondary px-4 py-4"
          >
            <Icon className="size-5 text-muted-foreground" />
            <span className="flex-1 font-medium">{label}</span>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
        ))}
      </ul>
      <div className="px-5 pt-8">
        <Link
          to="/login"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-4 font-semibold text-ink-foreground"
        >
          <LogOut className="size-5" />
          Sign Out
        </Link>
      </div>
      <BottomNav />
    </Phone>
  );
}
