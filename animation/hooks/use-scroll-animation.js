import { useState, useEffect, useRef } from "react";

export function useScrollAnimation({ threshold = 0, rootMargin = "0px", triggerOnce = false }) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (triggerOnce) observer.disconnect(); // Disconnect if `triggerOnce` is true
                } else if (!triggerOnce) {
                    setIsIntersecting(false);
                }
            },
            { rootMargin, threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.disconnect();
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { isIntersecting, ref: elementRef };
}
