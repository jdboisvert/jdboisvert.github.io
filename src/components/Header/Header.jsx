import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("jeffrey boisvert");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name="jeffrey boisvert"
          active={activeItem === "jeffrey boisvert"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="projects"
          className={styles.menuLinkRight}
          active={activeItem === "projects"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="resume"
          className={styles.menuLinkRight}
          active={activeItem === "resume"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="blog"
          className={styles.menuLinkRight}
          active={activeItem === "blog"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
      </Menu>
    </Segment>
  );
};

export default Header;
