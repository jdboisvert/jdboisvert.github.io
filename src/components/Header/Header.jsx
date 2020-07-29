import React, { useState } from "react";
import { Menu, Segment, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import resume from "../../static/jeffrey_boisvert_resume_english.pdf";

const Header = () => {
  const [activeItem, setActiveItem] = useState("jeffrey boisvert");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const comingSoonText = "Coming soon ...";

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
          <Menu.Item name="resume" as={"a"} href={resume} download />
          <Popup
            trigger={
              <Menu.Item
                name="projects"
                disabled
                active={activeItem === "projects"}
                onClick={handleItemClick}
                as={Link}
                to="/"
              />
            }
            content={comingSoonText}
            position="bottom"
          />
          <Popup
            trigger={
              <Menu.Item
                name="blog"
                disabled
                active={activeItem === "blog"}
                onClick={handleItemClick}
                as={Link}
                to="/"
              />
            }
            content={comingSoonText}
            position="bottom"
          />

          <Menu.Item name="francais" as={Link} to="/" />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Header;
