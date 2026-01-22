import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let current = 0;
    let target = 0;
    const ease = 0.08;

    const content = contentRef.current!;

    const setBodyHeight = () => {
      document.body.style.height = `${content.getBoundingClientRect().height}px`;
    };

    setBodyHeight();
    window.addEventListener("resize", setBodyHeight);

    // Smooth scroll animation cycle
    const smoothScroll = () => {
      target = window.scrollY;
      current += (target - current) * ease;

      gsap.set(content, {
        y: -current,
      });

      ScrollTrigger.update();
      requestAnimationFrame(smoothScroll);
    };

    requestAnimationFrame(smoothScroll);

    // ScrollTrigger proxy
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) target = value!;
        return target;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.refresh();

    // Animation
    gsap.fromTo(
      boxRef.current,
      {
        x: -200,
        scale: 0.7,
        rotate: -20,
        backgroundColor: "#6366f1", // indigo-500
      },
      {
        x: 200,
        scale: 1,
        rotate: 0,
        backgroundColor: "#eab308", // yellow-500
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    return () => {
      window.removeEventListener("resize", setBodyHeight);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="will-change-transform"
      >
        {/* Intro */}
        <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-5xl font-bold mb-4">Scroll Down</h1>
          <p className="text-xl text-gray-600">
            Smooth scroll animation cycle
          </p>
        </section>

        {/* Animation Stage */}
        <section className="h-screen bg-white flex items-start pt-40">
          <div
            ref={boxRef}
            className="mx-auto w-72 h-72 rounded-2xl shadow-xl
                       flex items-center justify-center
                       text-white text-2xl font-bold"
          >
            Animate
          </div>
        </section>

        {/* Outro */}
        <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
          <h2 className="text-4xl font-semibold">End of Scroll</h2>
        </section>
      </div>
    </div>
  );
};

export default App;
