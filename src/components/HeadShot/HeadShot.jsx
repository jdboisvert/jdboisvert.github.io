import React from "react";
import { Image, Reveal } from "semantic-ui-react";

import styles from "./HeadShot.module.css";

const HeadShot = () => {
  return (
    <Reveal animated="move" instant className={styles.container}>
      <Reveal.Content visible>
        <Image
          src="https://media-exp1.licdn.com/dms/image/C5603AQF2vGpv4V0vtQ/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=C7oK7cI7NNF8tZhbfDuxXeLIsFdvSqc5XIPWiTr2Kc4"
          size="big"
        />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image
          src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/2752956/avatar.png?width=90"
          size="big"
        />
      </Reveal.Content>
    </Reveal>
  );
};

export default HeadShot;
