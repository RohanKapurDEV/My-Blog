import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, Power2, Power3 } from "gsap";
// import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

export default function Home() {
  const appRef = useRef(null);

  const titleRef = useRef(null);
  const imageRef = useRef(null);

  const blogLinkRef = useRef(null);
  const projectsLinkRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const linksLinkRef = useRef(null);

  const appStyle = {
    visibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  };

  const tl = new gsap.timeline();

  useEffect(() => {
    tl.to(appRef.current, {
      duration: 0,
      visibility: "visible",
    });
    tl.from([blogLinkRef.current, projectsLinkRef.current], {
      duration: 1,
      y: "100%",
      ease: Power3.easeOut,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <div ref={appRef} style={appStyle}>
        <div className={styles.outerWrapper}>
          <div ref={titleRef} className={styles.titleText}>
            👋 Hi, I'm Rohan. I'm a creative fullstack developer.
          </div>
        </div>

        <div style={{ height: "1rem" }}></div>

        <div ref={imageRef} className={styles.outerWrapper}>
          <Image src="/images/header.gif" quality={100} alt="Picture of the author" width={402} height={302}></Image>
        </div>

        <div style={{ height: "1rem" }}></div>

        <div className={styles.outerWrapperLinks}>
          <div style={{ width: "6rem" }} className={styles.linkText}>
            <span ref={blogLinkRef}>/blog</span>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div style={{ width: "11.1rem" }} className={styles.linkText}>
            <span ref={projectsLinkRef}>/projects</span>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div style={{ width: "12.6rem" }} className={styles.linkText}>
            <span ref={aboutLinkRef}>/about me</span>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div style={{ width: "6.5rem" }} className={styles.linkText}>
            <span ref={linksLinkRef}>/links</span>
          </div>
        </div>
      </div>
    </>
  );
}
