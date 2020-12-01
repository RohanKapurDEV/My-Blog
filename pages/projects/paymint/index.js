import Image from "next/image";
import Footer from "../../../components/footer";
import styles from "../../../styles/Projects.module.scss";

export default function PaymintProjectPage() {
  return (
    <>
      <div className={styles.outerWrapper}>
        <div className={styles.titleText}>/projects/Paymint</div>
        <div className={styles.spacer}></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src="/images/paymint-logo.png" width={160} height={160}></Image>
        </div>

        <div className={styles.spacer}></div>
        <div className={styles.subtext}>
          Paymint is an advanced Bitcoin wallet for Android. I wrote the frontend client using Dart in the Flutter
          framework. The backend was made with Firebase, in Javascript.{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.paymintlabs.paymint"
            style={{ textDecoration: "underline" }}
          >
            The app is now live on the Play Store.
          </a>
        </div>
        <div className={styles.spacer}></div>
        <div style={{ fontSize: "1.5rem", textDecoration: "underline" }}>
          <a href="https://github.com/Paymint-Labs/">The full stack is open source on GitHub.</a>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
