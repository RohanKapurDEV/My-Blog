import styles from "../../styles/Blog.module.scss";
import Footer from "../../components/footer";
import Link from "next/link";
import {} from "clipboard";

export default function Links() {
  const email = "kapurrohan56@gmail.com";

  return (
    <>
      <div style={{ height: "90vh" }} className={styles.outerWrapper}>
        <div className={styles.titleText}>/links</div>
        <div className={styles.spacer}></div>
        <div>
          <a
            className={styles.titleText}
            style={{ textDecoration: "underline" }}
            href="https://www.twitter.com/0xrohan"
          >
            Twitter
          </a>
        </div>
        <div style={{ height: "1rem" }}></div>
        <div>
          <a
            className={styles.titleText}
            style={{ textDecoration: "underline" }}
            href="https://www.github.com/rohankapurdev"
          >
            Github
          </a>
        </div>
        <div style={{ height: "1rem" }}></div>
        <div>
          <a
            className={styles.titleText}
            style={{ textDecoration: "underline" }}
            href="https://www.instagram.com/0xrohan"
          >
            Instagram
          </a>
        </div>
        <div style={{ height: "1rem" }}></div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(email);
            alert("My email has been copied to your clipboard ✔");
          }}
          style={{ textDecoration: "underline" }}
          className={styles.titleText}
        >
          Email
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
