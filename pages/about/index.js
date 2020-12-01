import React from "react";
import styles from "../../styles/Blog.module.scss";
import Footer from "../../components/footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className={styles.outerWrapper}>
        <div className={styles.titleText}>/about</div>
        <div className={styles.spacer}></div>
        <div className={styles.titleText}>
          I'm a fullstack web and mobile developer and I enjoy pushing personal boundaries with every new thing I build,
          whether it's a personal project or work for a client.
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.titleText}>
          My personal interests apart from programming include music, gaming, bitcoin, and browsing dribbble (lmao).
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.titleText}>
          The tech I enjoy working with the most include: NodeJS, Next.JS, React, Firebase, AWS, GCP, DigitalOcean,
          Git(Hub), Flutter, Dart, JS/TS, NginX, Caddy, MongoDB, ExpressJS, NestJS, (… and a lot more that I can't
          remember). I can adapt to any tech stack or language required on the basis of what's being built.
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.titleText}>
          My personal interests apart from programming include music, gaming, bitcoin, and browsing dribbble (lmao).
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.titleText}>
          The things I value the most are learning, building, family, and friends. Not necessarily in that order. If you
          want to work with me, use the{" "}
          <Link href="/links">
            <a style={{ textDecoration: "underline" }}>/links</a>
          </Link>{" "}
          page to find a way to shoot me a message. I'm always looking for new opportunities and people to work with.
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.spacer}></div>
      </div>

      <Footer></Footer>
    </>
  );
}
