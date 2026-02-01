// src/hooks/useTrackSection.ts
import { useEffect, useRef } from "react";
import { track } from "@/lib/mixpanel";

export const useTrackSection = (
    ref: React.RefObject<HTMLElement>,
    sectionName: string
) => {
    const hasTracked = useRef(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked.current) {
                    track("Section Viewed", { section: sectionName });
                    hasTracked.current = true;
                }
            },
            { threshold: 0.5 } // 50% visible = vue
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, sectionName]);
};