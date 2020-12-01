import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, Power4 } from "gsap";
import Skeleton from "react-loading-skeleton";
// import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

export default function Home() {
  const appRef = useRef(null);

  const titleRef = useRef(null);
  const imageRef = useRef(null);

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

        <div style={{ height: "1rem" }}></div>

        <div ref={imageRef} className={styles.outerWrapper}>
          <div className={styles.hideImage}>
            <Image
              onLoad={() => setShowImage(true)}
              className={styles.hideImage}
              src="/images/header.gif"
              quality={100}
              alt="cache trigger strategy"
              width={402}
              height={302}
            ></Image>
          </div>

          {showImage ? (
            <Image
              src="/images/header.gif"
              quality={100}
              alt="live look at me while everything burns around me"
              width={402}
              height={302}
            ></Image>
          ) : (
            <div
              style={{
                width: "402px",
                height: "302px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Skeleton height={302} width={402} />
            </div>
          )}
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
