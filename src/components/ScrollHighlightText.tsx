import { useEffect, useRef, useState } from "react";

export function ScrollHighlightText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Get the bounding rectangle of the text container
      const rect = containerRef.current.getBoundingClientRect();
      
      // The animation should start when the top of the element hits the bottom of the screen (rect.top = window.innerHeight)
      // The animation should end when the top of the element hits the middle of the screen (rect.top = window.innerHeight * 0.5)
      
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element has progressed from the bottom to the middle of the screen
      const start = windowHeight * 0.8; // Start animating slightly after it enters
      const end = windowHeight * 0.3;   // Finish animating when it reaches 30% from the top
      
      const current = rect.top;
      
      if (current > start) {
        setProgress(0);
      } else if (current < end) {
        setProgress(1);
      } else {
        // Calculate percentage between start and end (0 to 1)
        setProgress(1 - (current - end) / (start - end));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial trigger
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <h2 ref={containerRef} className={`${className} flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]`}>
      {words.map((word, i) => {
        // Calculate at what progress this specific word should be fully highlighted
        const step = 1 / words.length;
        const startProgress = i * step;
        const endProgress = (i + 1) * step;
        
        let opacity = 0.15; // default unhighlighted state (dimmed)
        
        if (progress >= endProgress) {
          opacity = 1; // fully highlighted
        } else if (progress > startProgress) {
          // partially highlighted as you scroll past this specific word
          const localProgress = (progress - startProgress) / step;
          opacity = 0.15 + (0.85 * localProgress);
        }

        return (
          <span 
            key={i} 
            className="transition-opacity duration-75"
            style={{ opacity }}
          >
            {word}
          </span>
        );
      })}
    </h2>
  );
}
