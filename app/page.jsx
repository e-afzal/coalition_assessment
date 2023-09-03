"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// STYLES
import styles from "@/public/styles/page/home.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import SwiperHistory from "@/app/components/SwiperHistory";
import TabsRadix from "@/app/components/Tabs";
import AccordionComp from "@/app/components/Accordion";
import Footer from "@/app/components/Footer";

// ASSET IMPORTS
import historyImg from "@/public/images/2. history_section/history.png";
import heroTextHistory from "@/public/images/2. history_section/hero_text.svg";
import heroTextClimb from "@/public/images/3. climb_section/hero_text.svg";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const logoTextRef = useRef(null);
  const historyLinkRef = useRef(null);
  const teamLinkRef = useRef(null);

  useEffect(() => {
    function triggerFunc() {
      return {
        trigger: heroRef.current,
        start: "bottom center",
        end: "150% center",
        toggleActions: "play pause resume reset",
        scrub: true,
        // markers: true,
      };
    }
    gsap.to(headerRef.current, {
      backgroundColor: "#fff",
      duration: 0.1,
      scrollTrigger: triggerFunc(),
    });
    gsap.to([historyLinkRef.current, teamLinkRef.current], {
      color: "#414f6b",
      duration: 0.1,
      scrollTrigger: triggerFunc(),
    });
    gsap.to(logoTextRef.current, {
      display: "block",
      duration: 0.1,
      scrollTrigger: triggerFunc(),
    });
  }, []);

  return (
    <>
      <Navbar
        headerRef={headerRef}
        historyLinkRef={historyLinkRef}
        teamLinkRef={teamLinkRef}
        logoTextRef={logoTextRef}
      />
      <main id={styles.main}>
        {/* SECTION: HERO */}
        <section id={styles.hero} ref={heroRef}>
          {/* <Image src={heroImg} alt='Los Angeles Mountains Hero image' /> */}
        </section>

        {/* SECTION: HISTORY */}
        <section id='history' className={styles.history}>
          <Image
            className={styles.history_image}
            src={historyImg}
            alt='History section hero image'
          />
          <div className={styles.history_content}>
            <div className={styles.history_title}>
              <Image
                src={heroTextHistory}
                alt='Hero text for the History section'
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dolore animi iure quasi odit quibusdam facilis inventore vitae
              recusandae facere? Delectus aliquid esse, dolor consequatur nobis
              sunt. Harum dignissimos ullam nam id adipisci sed inventore
              dolorum mollitia, neque pariatur iure.
            </p>
          </div>
          <div className={styles.history_carousel_container}>
            <div className={styles.history_carousel}>
              <SwiperHistory />
            </div>
          </div>
        </section>

        {/* SECTION: CLIMB */}
        <section id='climb' className={styles.climb}>
          <div className={styles.climb_header}>
            <div className={styles.climb_header_container}>
              <Image src={heroTextClimb} alt='History section hero image' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                dolore animi iure quasi odit quibusdam facilis inventore vitae
                recusandae facere? Delectus aliquid esse, dolor consequatur
                nobis sunt. Harum dignissimos ullam nam id adipisci sed
                inventore dolorum mollitia, neque pariatur iure.
              </p>
            </div>
          </div>
          <div className={styles.climb_tabs_background}>
            <div className={styles.climb_tabs_container}>
              <TabsRadix />
            </div>
          </div>
          <div className={styles.climb_accordion_container}>
            <AccordionComp />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
