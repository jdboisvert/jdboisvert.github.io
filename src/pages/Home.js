import React from "react";
import HeadShot from "../components/HeadShot";
import { withRouter } from "react-router-dom";
import { Segment, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <Segment className={styles.mainContainer}>
      <Container text className={styles.textContainerSpacing}>
        <Header as="h2">Hi, I'm Jeffrey Boisvert</Header>
        <Header as="h4">
          Software Developer with a love for building, learning, and data.
        </Header>
        <p>
          Since I could remember I have always loved working with software
          (making games on Scatch and building my own websites). This started me
          down the path of wanting to become a developer and I have not stopped
          since.{" "}
          <span className={styles.highlight}>
            I believe software can be a tool to help solve any problem
          </span>{" "}
          and I love building those solutions.
        </p>
        <p>
          I have experience with several programing languages such as Java, C#,
          Python, Javascript, PHP, and Kotlin (I love tinkering with Ardunios
          too). I have worked with several web frameworks such as Laravel,
          Django, Flask, Lumen, ASP.NET and have used several libraries such as
          React and Pandas. Test Driven Development is at the core of what I do
          since I believe it helps build better products.
        </p>
        <p>
          When I'm not coding, you'll find me hiking, playing music, or simply
          exploring new places. Whatever I decide to do I always love having a
          nice cup of coffee ☕ to start my day !
        </p>
        <p>
          You can read my <Link to={"/"}>blog</Link>, explore{" "}
          <Link to={"/"}>projects</Link> I have built, or reach out to me to
          help you with your project.
        </p>
      </Container>
      <HeadShot />
    </Segment>
  );
};

export default withRouter(Home);
