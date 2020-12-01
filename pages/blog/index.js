import React from "react";
import styles from "../../styles/Blog.module.scss";
import Footer from "../../components/footer";

export default function Blog() {
  return (
    <>
      <div className={styles.outerWrapper}>
        <div className={styles.titleText}>/blog</div>
        <div className={styles.spacer}></div>
        <div className={styles.titleText}>
          I haven't written any blog posts yet but I will probably do so at some point in the future. Toss me your email
          below and I'll hit you up with a ping when I post.
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.titleText}>
          Your emails will never be shared with third parties and I promise to never spam 🤞
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
