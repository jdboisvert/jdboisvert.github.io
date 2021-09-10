import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";
import resume from "../../static/jeffrey_boisvert_resume_english.pdf";

const Header = () => {
  const french = "français";
  const english = "english";

  const [activeItem, setActiveItem] = useState("jeffrey boisvert");
  const [language, setLanguage] = useState(french);
  const { t, i18n } = useTranslation("common");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const goToBlog = (e) => {
    window.open("https://dev.to/jdvert")
  }

  const handleLanguageSwitch = (e, { name }) => {
    const languageToSwitchTo = name === french ? "fr" : "en";

    i18n.changeLanguage(languageToSwitchTo);
    setLanguage(name === french ? english : french);
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary className={styles.centeredContainer}>
        <Menu.Item
          name="jeffrey boisvert"
          active={activeItem === "jeffrey boisvert"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item name={t("menu.resume")} as={"a"} href={resume} download />
          <Menu.Item
            name="blog"
            active={activeItem === "blog"}
            onClick={goToBlog}
          />
          <Menu.Item name={language} onClick={handleLanguageSwitch} />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Header;
