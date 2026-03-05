import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageOverlayProps {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageOverlay({
  src,
  alt,
  className,
  overlayClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageOverlayProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent",
          overlayClassName
        )}
      />
    </div>
  );
}
