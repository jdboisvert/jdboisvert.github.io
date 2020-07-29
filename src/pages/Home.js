import React from "react";
import { withRouter } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";

import styles from "./Home.module.css";
import Biography from "../components/Biography";
import HeadShot from "../components/HeadShot";

const Home = () => {
  return (
    <Segment className={styles.mainContainer}>
      <Container text className={styles.textContainerSpacing}>
        <Biography />
      </Container>
      <HeadShot />
    </Segment>
  );
};

export default withRouter(Home);
