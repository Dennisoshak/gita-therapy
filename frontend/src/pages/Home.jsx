import React from "react";
import "../styles/Home.css";
import gita from "../assets/gita.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  return (
    <div className="home-c" style={{ direction: direction }}>
      <h1 style={{ margin: "2rem" }}>{t("about-me")}</h1>
      <div className="about">
        <div>
          <img src={gita} alt="" className="gita-img" />
        </div>
        <div className="about-text">{t("about-me-text")}</div>
      </div>
    </div>
  );
};

export default Home;
