import { Suspense, useEffect, useRef, useState } from "react";

const LazySection = ({ id, children, minHeight = 320, className = "" }) => {
  const sectionRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldRender) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`lazy-section ${className}`.trim()}
      style={shouldRender ? undefined : { minHeight }}
    >
      {shouldRender ? (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazySection;
