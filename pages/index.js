import styles from "../styles/Home.module.scss";
import { useRef } from "react";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  const appRef = useRef(null);

  const titleRef = useRef(null);
  const videoRef = useRef(null);

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

  return (
    <>
      <div ref={appRef} className={styles.appStyle}>
        <div className={styles.outerWrapper}>
          <div ref={titleRef} className={styles.titleText}>
            👋 Hi, I'm Rohan. I design and program fullstack software.
          </div>
        </div>

        <div ref={videoRef} className={styles.outerWrapper}>
          <video width={300} height={300} autoPlay muted loop>
            <source src="/videos/4amvibes.mp4" type="video/mp4" />
          </video>
        </div>

        <Footer></Footer>
        {/* <div className={styles.outerWrapperLinks}>
          <div className={styles.linkText} ref={blogLinkRef}>
            <Link href="/blog">
              <a>/blog</a>
            </Link>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div ref={projectsLinkRef} className={styles.linkText}>
            /projects
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div ref={aboutLinkRef} className={styles.linkText}>
            <Link href="/about">
              <a>/about</a>
            </Link>
          </div>
          <div style={{ marginRight: "3rem" }}></div>
          <div ref={linksLinkRef} className={styles.linkText}>
            <Link href="/links">
              <a>/links</a>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}
