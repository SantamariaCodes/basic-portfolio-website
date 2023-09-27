import { useCallback } from "react";

const useScrollToRef = (ref: React.RefObject<HTMLDivElement>, offset = 75, duration = 2200) => {
  return useCallback(() => {
    if (ref.current) {
      const start = window.scrollY;
      const to = ref.current.getBoundingClientRect().top + start - offset;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = currentTime - (startTime as number);
        const scroll = easeInOutQuad(progress, start, to - start, duration);
        window.scrollTo(0, scroll);
        if (progress < duration) window.requestAnimationFrame(animate);
      };
      
      window.requestAnimationFrame(animate);
    }
  }, [ref, offset, duration]);
};


const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

export default useScrollToRef;
