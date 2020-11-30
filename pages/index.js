import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
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
  }, []);

  return (
    <>
      <div ref={appRef} style={appStyle}>
        <div className={styles.outerWrapper}>
          <div className={styles.titleText}>
            <span ref={titleRef}>👋 Hi, I'm Rohan. I'm a creative fullstack developer.</span>
          </div>
        </div>

        <div style={{ height: "1rem" }}></div>

        <div ref={imageRef} className={styles.outerWrapper}>
          <Image src="/images/header.gif" quality={100} alt="Picture of the author" width={402} height={302}></Image>
        </div>

        <div style={{ height: "1rem" }}></div>

        <div className={styles.outerWrapperLinks}>
          <div className={styles.linkText}>
            <span ref={blogLinkRef}>/blog</span>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div className={styles.linkText}>
            <span ref={projectsLinkRef}>/projects</span>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div className={styles.linkText}>
            <span ref={aboutLinkRef}>/about</span>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div className={styles.linkText}>
            <span ref={linksLinkRef}>/links</span>
          </div>
        </div>
      </div>
    </>
  );
}
