import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

// Note: SplitText is a paid GSAP plugin, so we'll create a simple alternative
interface GSAP3DTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function GSAP3DText({ 
  children, 
  delay = 0, 
  className = "",
  as: Component = "div"
}: GSAP3DTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;

    // Split text into words and characters
    const content = text.textContent || "";
    const words = content.split(" ");
    
    text.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block" style="transform-style: preserve-3d;">${word
            .split("")
            .map(
              (char) =>
                `<span class="inline-block" style="transform-style: preserve-3d;">${
                  char === " " ? "&nbsp;" : char
                }</span>`
            )
            .join("")}</span>&nbsp;`
      )
      .join("");

    const chars = text.querySelectorAll("span > span");

    // Initial state
    gsap.set(text, {
      transformPerspective: 1000,
      transformStyle: "preserve-3d",
    });

    // Animate each character
    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
        z: -100,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        z: 0,
        rotationX: 0,
        duration: 0.8,
        delay: delay,
        stagger: {
          amount: 0.8,
          from: "start",
        },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return (
    <Component
      ref={textRef as any}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </Component>
  );
}
