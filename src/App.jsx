import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // =========================
      // PAGE LOAD ANIMATION
      // =========================

      const intro = gsap.timeline();

      intro
        .from(".navbar", {
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        })

        .from(".small-text", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.3")

        .from(".hero-title", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        }, "-=0.2")

        .from(".description", {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.5")

        .from(".stat", {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out"
        }, "-=0.2")

        .from(".visual", {
          scale: 0.7,
          opacity: 0,
          rotate: -10,
          duration: 1,
          ease: "back.out(1.5)"
        }, "-=0.8");


      // =========================
      // MAIN VISUAL SCROLL
      // =========================

      gsap.to(visualRef.current, {
        x: 280,
        y: 160,
        rotate: 25,
        scale: 1.25,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });


      // =========================
      // TITLE SCROLL
      // =========================

      gsap.to(titleRef.current, {
        x: -80,
        y: -100,
        scale: 0.85,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });


      // =========================
      // DESCRIPTION SCROLL
      // =========================

      gsap.to(".description", {
        y: -60,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });


      // =========================
      // ORANGE CIRCLE ROTATION
      // =========================

      gsap.to(".visual-circle", {
        rotation: 360,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2
        }
      });


      // =========================
      // OUTER RING ROTATION
      // =========================

      gsap.to(".visual-ring", {
        rotation: -360,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2
        }
      });


      // =========================
      // FLOATING DOTS
      // =========================

      gsap.to(".dot-one", {
        y: -80,
        x: 40,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".dot-two", {
        y: 100,
        x: -40,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });


      // =========================
      // SECOND SECTION
      // =========================

      gsap.from(".about-section p", {
        y: 40,
        opacity: 0,

        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });


      gsap.from(".about-section h2", {
        y: 100,
        opacity: 0,

        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "top 40%",
          scrub: 1
        }
      });

    }, heroRef);

    return () => ctx.revert();

  }, []);


  return (
    <div className="page">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="logo">
          ITZFIZZ
        </div>

        <div className="nav-links">
          <span>WORK</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </div>

      </nav>


      {/* =========================
          HERO SECTION
      ========================= */}

      <section
        className="hero"
        ref={heroRef}
      >

        <div className="hero-content">

          {/* SMALL TITLE */}

          <p className="small-text">
            DIGITAL EXPERIENCE STUDIO
          </p>


          {/* MAIN TITLE */}

          <h1
            className="hero-title"
            ref={titleRef}
          >
            W E L C O M E

            <br />

            I T Z F I Z Z
          </h1>


          {/* DESCRIPTION */}

          <p className="description">
            We create modern digital experiences
            that connect creativity, technology
            and people.
          </p>


          {/* STATISTICS */}

          <div className="stats">

            <div className="stat">

              <h2>
                95%
              </h2>

              <p>
                PERFORMANCE
              </p>

            </div>


            <div className="stat">

              <h2>
                87%
              </h2>

              <p>
                GROWTH
              </p>

            </div>


            <div className="stat">

              <h2>
                92%
              </h2>

              <p>
                IMPACT
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            ANIMATED VISUAL
        ========================= */}

        <div className="visual-wrapper">

          <div
            className="visual"
            ref={visualRef}
          >

            {/* ORANGE CIRCLE */}

            <div className="visual-circle"></div>


            {/* OUTER RING */}

            <div className="visual-ring"></div>


            {/* BLACK CARD */}

            <div className="visual-card">

              <span>
                ITZ
              </span>

              <strong>
                FIZZ
              </strong>

            </div>


            {/* FLOATING DOTS */}

            <div className="floating-dot dot-one"></div>

            <div className="floating-dot dot-two"></div>

            <div className="floating-dot dot-three"></div>

          </div>

        </div>


        {/* =========================
            SCROLL INDICATOR
        ========================= */}

        <div className="scroll-text">

          <span>
            ↓
          </span>

          SCROLL TO EXPLORE

        </div>

      </section>


      {/* =========================
          SECOND SECTION
      ========================= */}

      <section className="about-section">

        <p>
          CREATIVE • DIGITAL • TECHNOLOGY
        </p>

        <h2>

          Building experiences

          <br />

          that move with you.

        </h2>

      </section>

    </div>
  );
}

export default App;