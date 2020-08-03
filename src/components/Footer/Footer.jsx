import React, { useState } from "react";
import { Menu, Popup } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation("common");

  const [emailPopupText, setEmailPopupText] = useState(t("clickToCopy"));

  const handleCopyEmail = (e) => {
    setEmailPopupText(t("copied"));
    setTimeout(() => {
      setEmailPopupText(t("clickToCopy"));
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
              <Menu.Item className={styles.footerItem}>{t("email")}</Menu.Item>
            </CopyToClipboard>
          }
          inverted
        />
        <Menu.Item
          className={styles.footerItem}
          href="https://github.com/jdboisvert"
          target="_blank"
        >
          GitHub
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
