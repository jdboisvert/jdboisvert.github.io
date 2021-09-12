import React, { useState } from "react";
import { Menu, Popup } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";
import {EMAIL, GITHUB_URL, LINKEDIN_URL, CURRENT_PROJECT_SOURCE_CODE_URL} from "../../constants/constants"

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
              text={EMAIL}
              onCopy={handleCopyEmail}
            >
              <Menu.Item className={styles.footerItem}>{t("email")}</Menu.Item>
            </CopyToClipboard>
          }
          inverted
        />
        <Menu.Item
          className={styles.footerItem}
          href={GITHUB_URL}
          target="_blank"
        >
          GitHub
        </Menu.Item>
        <Menu.Item
          href={LINKEDIN_URL}
          target="_blank"
          className={styles.footerItem}
        >
          LinkedIn
        </Menu.Item>
        <Menu.Item
          href={CURRENT_PROJECT_SOURCE_CODE_URL}
          target="_blank"
          className={styles.footerItem}
        >
          {t("projectSourceCode")}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Footer;
