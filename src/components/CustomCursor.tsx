import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Graceful degradation: disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering a clickable element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver);

    const render = () => {
      // Dot follows exactly (with slight lerp for smoothness)
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 1;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 1;
      
      // Ring follows with more delay (spring effect)
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Don't render anything on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer Trailing Ring */}
      <div
        ref={ringRef}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center -ml-4 -mt-4 h-8 w-8 rounded-full border transition-[opacity,width,height,margin,border-color] duration-300 ease-out",
          isVisible ? "opacity-100" : "opacity-0",
          isHovering 
            ? "border-ember/40 bg-ember/10 backdrop-blur-[2px] h-16 w-16 -ml-8 -mt-8" 
            : "border-foreground/30 h-8 w-8"
        )}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center -ml-1 -mt-1 h-2 w-2 rounded-full transition-all duration-300",
          isVisible ? "opacity-100" : "opacity-0",
          isHovering ? "bg-transparent" : "bg-foreground"
        )}
      />
    </>
  );
}
