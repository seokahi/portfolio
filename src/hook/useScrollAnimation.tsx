import { useRef, useState, useEffect } from "react";
interface IScrollOptions {
  rootMargin: string;
}

export const useScrollAnimation = (options: IScrollOptions) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
useEffect(() => {
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
      });
    };



    const observer = new IntersectionObserver(callback, {...options,root:null,threshold:0});
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, [options]);

  return { isInViewport, ref };
};
