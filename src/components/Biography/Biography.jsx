import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./Biography.module.css";

const Biography = () => {
  return (
    <>
      <Header as="h2">Hi, I'm Jeffrey Boisvert</Header>
      <Header as="h4">
        Software Developer from Québec with a love for problem solving,
        learning, and data.
      </Header>
      <p>
        Since I could remember I have always loved working with software (making
        games on Scatch and building my own websites). This started me down the
        path of wanting to become a developer and I have not stopped since.{" "}
        <span className={styles.highlight}>
          I believe software can help solve any problem
        </span>{" "}
        and I love building those solutions.
      </p>
      <p>
        I have experience with several programing languages such as Java, C#,
        Python, Javascript, PHP, and Kotlin (I love tinkering with Ardunios
        too). I have worked with several web frameworks such as Laravel, Django,
        Flask, Lumen, ASP.NET and have used several libraries such as React and
        Pandas.
      </p>
      <p>
        When I'm not coding, you'll find me hiking, playing music, or simply
        exploring new places. Whatever I decide to do I always love having a
        nice cup of coffee{" "}
        <span role="img" aria-label="Coffee cup">
          ☕
        </span>{" "}
        to start my day!
      </p>
      <p>
        You can read my <Link to={"/"}>blog</Link>, explore{" "}
        <Link to={"/"}>projects</Link> I have built, or reach out to me to help
        you with your project.
      </p>
    </>
  );
};

export default Biography;
