import React from "react";
import { withRouter } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";

import styles from "./Home.module.css";
import Biography from "../components/Biography";

const Home = () => {
  return (
    <Segment className={styles.mainContainer}>
      <Container text className={styles.textContainerSpacing}>
        <Biography />
      </Container>
    </Segment>
  );
};

export default withRouter(Home);
