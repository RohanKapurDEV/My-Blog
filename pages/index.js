import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, Power4 } from "gsap";
import Skeleton from "react-loading-skeleton";
// import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

export default function Home() {
  const appRef = useRef(null);

  const titleRef = useRef(null);
  const videoRef = useRef(null);

  const blogLinkRef = useRef(null);
  const projectsLinkRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const linksLinkRef = useRef(null);

  const [showImage, setShowImage] = useState(false);

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

        <div style={{ height: "2.5rem" }}></div>

        <div ref={videoRef} className={styles.outerWrapper}>
          <video width={300} height={300} autoPlay muted loop>
            <source src="/videos/4amvibes.mp4" type="video/mp4" />
          </video>
        </div>

        <div style={{ height: "2.5rem" }}></div>

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
