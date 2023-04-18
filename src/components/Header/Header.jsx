import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";
import {MY_NAME, BLOG_URL, BLOG_NAME, FRENCH, ENGLISH, FRENCH_SHORTNAME, ENGLISH_SHORTNAME} from "../../constants/constants"

const Header = () => {
  const [activeItem, setActiveItem] = useState(MY_NAME);
  const [language, setLanguage] = useState(FRENCH);
  const { t, i18n } = useTranslation("common");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const goToBlog = (e) => {
    window.open(BLOG_URL)
  }

  const handleLanguageSwitch = (e, { name }) => {
    const languageToSwitchTo = name === FRENCH ? FRENCH_SHORTNAME : ENGLISH_SHORTNAME;

    i18n.changeLanguage(languageToSwitchTo);
    setLanguage(name === FRENCH ? ENGLISH : FRENCH);
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary className={styles.centeredContainer}>
        <Menu.Item
          name={MY_NAME}
          active={activeItem === MY_NAME}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name={BLOG_NAME}
            active={activeItem === BLOG_NAME}
            onClick={goToBlog}
          />
          <Menu.Item name={language} onClick={handleLanguageSwitch} />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Header;
