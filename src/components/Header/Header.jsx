import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("jeffrey boisvert");

  const handleItemClick = (e, { name }) => setActiveItem(name);

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
          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="resume"
            active={activeItem === "resume"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="blog"
            active={activeItem === "blog"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Header;
