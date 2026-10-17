import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Home, MoreHorizontal, Package, Send, MapPin, User } from "lucide-react";
import type { ReactNode } from "react";

export function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="min-h-screen bg-background md:py-8">
      <div className={`relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-card md:min-h-[860px] md:rounded-[2.5rem] md:shadow-soft ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function TopBar({ title, menu = false }: { title: string; menu?: boolean }) {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-5 pt-6 pb-4">
      <button aria-label="Back" onClick={() => router.history.back()} className="grid size-10 place-items-center rounded-full bg-secondary">
        <ArrowLeft className="size-5" />
      </button>
      <h1 className="text-lg font-bold">{title}</h1>
      <span className="grid size-10 place-items-center">{menu && <MoreHorizontal className="size-5" />}</span>
    </header>
  );
}

export function BottomNav() {
  const item = "flex flex-col items-center gap-1 text-[11px] text-muted-foreground";
  const active = { className: "text-foreground font-semibold" };
  return (
    <nav className="absolute inset-x-0 bottom-0 flex items-end justify-around border-t bg-card px-4 pb-5 pt-3">
      <Link to="/home" className={item} activeProps={active}><Home className="size-5" />Home</Link>
      <Link to="/track-order" className={item} activeProps={active}><Package className="size-5" />Order</Link>
      <Link to="/send" aria-label="Send parcel" className="-mt-8 grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
        <Send className="size-6" />
      </Link>
      <Link to="/tracking" className={item} activeProps={active}><MapPin className="size-5" />Tracking</Link>
      <Link to="/profile" className={item} activeProps={active}><User className="size-5" />Profile</Link>
    </nav>
  );
}

export function PackageStack() {
  return (
    <div className="flex -space-x-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="grid size-7 place-items-center rounded-lg bg-accent text-primary ring-2 ring-card">
          <Package className="size-4" />
        </span>
      ))}
    </div>
  );
}
