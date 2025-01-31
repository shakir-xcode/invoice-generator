import React from "react";
import { useScrollAnimation } from "./hooks/use-scroll-animation";
// import { useScrollAnimation } from "@animation/hooks/useScrollAnimation";

export function ScrollAnimated({
  children,
  className = "",
  animationClass = "slide-in",
  threshold = 0.2,
  rootMargin = "0px",
  triggerOnce = false,
}) {
  const { isIntersecting, ref } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${
        isIntersecting ? animationClass : ""
      }  delay-1000 `}
    >
      {children}
    </div>
  );
}
