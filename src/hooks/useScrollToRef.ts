import { useCallback } from "react";

const useScrollToRef = (ref: React.RefObject<HTMLDivElement>, offset = 75) => {
  return useCallback(() => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [ref, offset]);
};

export default useScrollToRef;
