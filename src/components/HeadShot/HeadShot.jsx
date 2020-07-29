import React from "react";
import { Image } from "semantic-ui-react";

import styles from "./HeadShot.module.css";
import headshot from "../../static/headshot.jpg";

const HeadShot = () => {
  return (
    <div className={styles.headshot}>
      <Image src={headshot} size="big" circular />
    </div>
  );
};

export default HeadShot;
