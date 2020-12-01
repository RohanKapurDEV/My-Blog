import styles from "../../styles/Projects.module.scss";
import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projectItemContainerStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <>
      <div className={styles.outerWrapper}>
        <div className={styles.titleText}>/projects</div>
        <div className={styles.spacer}></div>
        <Link href="/projects/paymint">
          <div style={projectItemContainerStyle}>
            <Image src="/images/paymint-logo.png" height={50} width={50}></Image>
            <div style={{ width: "1rem" }}></div>
            <div className={styles.projectItemText}>Paymint - An advanced Bitcoin wallet</div>
          </div>
        </Link>
      </div>

      <Footer></Footer>
    </>
  );
}
