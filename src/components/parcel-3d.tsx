import { cn } from "@/lib/utils";

type Parcel3DProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "float" | "tilt" | "spin";
};

const sizeMap = {
  sm: "scale-75",
  md: "scale-100",
  lg: "scale-125",
};

const animMap = {
  float: "animate-float-3d",
  tilt: "animate-tilt-idle",
  spin: "animate-spin-y",
};

/** Pure CSS 3D cardboard parcel that floats in space */
export function Parcel3D({ className, size = "md", variant = "float" }: Parcel3DProps) {
  return (
    <div className={cn("relative perspective-scene", className)}>
      <div className={cn("parcel-3d", sizeMap[size], animMap[variant])}>
        <div className="parcel-3d__face parcel-3d__front">
          <span className="parcel-3d__tape parcel-3d__tape--h" />
          <span className="parcel-3d__tape parcel-3d__tape--v" />
        </div>
        <div className="parcel-3d__face parcel-3d__back" />
        <div className="parcel-3d__face parcel-3d__left" />
        <div className="parcel-3d__face parcel-3d__right" />
        <div className="parcel-3d__face parcel-3d__top" />
      </div>
      <div className="parcel-float-shadow" />
    </div>
  );
}
