import React, { useState } from "react";
import { Menu, Popup } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "./Footer.module.css";

const Footer = () => {
  const emailClickToCopyEmailText = "Click to copy email";
  const emailCopiedText = "Copied!";

  const [emailPopupText, setEmailPopupText] = useState(
    emailClickToCopyEmailText
  );

  const handleCopyEmail = (e) => {
    setEmailPopupText(emailCopiedText);
    setTimeout(() => {
      setEmailPopupText(emailClickToCopyEmailText);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <Menu compact className={styles.menuContainer}>
        <Popup
          content={emailPopupText}
          trigger={
            <CopyToClipboard
              text="info.jeffreyboisvert@gmail.com"
              onCopy={handleCopyEmail}
            >
              <Menu.Item className={styles.footerItem}>Email</Menu.Item>
            </CopyToClipboard>
          }
          inverted
        />
        <Menu.Item
          className={styles.footerItem}
          href="https://github.com/jdboisvert"
          target="_blank"
        >
          Github
        </Menu.Item>
        <Menu.Item
          href="https://www.linkedin.com/in/jeffreyboisvert/"
          target="_blank"
          className={styles.footerItem}
        >
          LinkedIn
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Footer;
