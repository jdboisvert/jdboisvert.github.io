import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Biography.module.css";

const Biography = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Header as="h2">{t("bio.heading")}</Header>
      <Header as="h4">{t("bio.subheading")}</Header>
      <p>
        {t("bio.firstParagraphPartOne")}
        <span className={styles.highlight}>
          {t("bio.firstParagraphHighlightedText")}
        </span>
        {t("bio.firstParagraphPartTwo")}
      </p>
      <p>{t("bio.secondParagraph")}</p>
      <p>
        {t("bio.thirdParagraphPartOne")}
        <span role="img" aria-label="Coffee cup">
          ☕
        </span>
        {t("bio.thirdParagraphPartTwo")}
      </p>
      <p>
        {t("bio.forthParagraphPartOne")}
        <Link to={"/"}>{t("menu.blog")}</Link>
        {t("bio.forthParagraphPartTwo")}
        <a href={"https://github.com/jdboisvert"} target={"_blank"} rel="noopener noreferrer">{t("menu.projects")}</a>
        {t("bio.forthParagraphPartThree")}
      </p>
    </>
  );
};

export default Biography;
