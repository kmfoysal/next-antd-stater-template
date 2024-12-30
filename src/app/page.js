import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
        <h2 className="fs-3 text-center">
          Welcome To Vehicle Import Business to Australia
        </h2>
      </div>
    </div>
  );
}
