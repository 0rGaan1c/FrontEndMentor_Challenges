import React from "react";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <div className={styles.cta}>
          <h1>
            Get <span>insights </span>that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.points}>
            <h1>10k+ </h1> <p>companies </p>
          </div>
          <div className={styles.points}>
            <h1>314 </h1> <p>templates </p>
          </div>
          <div className={styles.points}>
            <h1>12m+ </h1>
            <p>queries</p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.layer}></div>
      </div>
    </section>
  );
};

export default Main;
