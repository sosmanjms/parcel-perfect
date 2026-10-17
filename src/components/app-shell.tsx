import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Home, MoreHorizontal, Package, Send, MapPin, User } from "lucide-react";
import type { ReactNode } from "react";

export function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="min-h-screen bg-background md:py-8">
      <div
        className={`relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-card md:min-h-[860px] md:rounded-[2.5rem] md:shadow-3d animate-enter-3d ${
          className
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function TopBar({ title, menu = false }: { title: string; menu?: boolean }) {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-5 pt-6 pb-4 animate-enter-fade">
      <button
        aria-label="Back"
        onClick={() => router.history.back()}
        className="grid size-10 place-items-center rounded-full bg-secondary pressable transition-transform hover:scale-105"
      >
        <ArrowLeft className="size-5" />
      </button>
      <h1 className="text-lg font-bold">{title}</h1>
      <span className="grid size-10 place-items-center">
        {menu && <MoreHorizontal className="size-5" />}
      </span>
    </header>
  );
}

export function BottomNav() {
  const item =
    "flex flex-col items-center gap-1 text-[11px] text-muted-foreground transition-all duration-200";
  const active = { className: "text-foreground font-semibold" };
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-around border-t bg-card/90 px-4 pb-5 pt-3 backdrop-blur-md animate-enter-up">
      <Link to="/home" className={item} activeProps={active}>
        <Home className="size-5" />
        Home
      </Link>
      <Link to="/track-order" className={item} activeProps={active}>
        <Package className="size-5" />
        Order
      </Link>
      <Link
        to="/send"
        aria-label="Send parcel"
        className="-mt-8 grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow-lg animate-glow-pulse pressable transition-transform hover:scale-110"
        style={{ transform: "translateZ(20px)" }}
      >
        <Send className="size-6" />
      </Link>
      <Link to="/tracking" className={item} activeProps={active}>
        <MapPin className="size-5" />
        Tracking
      </Link>
      <Link to="/profile" className={item} activeProps={active}>
        <User className="size-5" />
        Profile
      </Link>
    </nav>
  );
}

export function PackageStack() {
  return (
    <div className="flex -space-x-2 perspective-scene">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="grid size-7 place-items-center rounded-lg bg-accent text-primary ring-2 ring-card animate-bounce-soft"
          style={{
            animationDelay: `${i * 0.15}s`,
            transform: `translateZ(${(2 - i) * 6}px)`,
          }}
        >
          <Package className="size-4" />
        </span>
      ))}
    </div>
  );
}
