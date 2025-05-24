import React from "react";
import gitaImg from "../../assets/gita.jpg"; 
import styles from "./Home.module.scss" 
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  return (
    <div className={styles.homeC} style={{ direction: direction }}>
      <h1 style={{ margin: "2rem" }}>{t("about-me")}</h1>
      <div className={styles.about}>
        <div>
          <img src={gitaImg} alt="" className={styles.gitaImg} />
        </div>
        <div className={styles.aboutText}>{t("about-me-text")}</div>
      </div>
    </div>
  );
};

export default Home;
