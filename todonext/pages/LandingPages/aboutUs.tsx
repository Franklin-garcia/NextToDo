import Container from "@/pages/Containers/Container";
import React from "react";
const AboutUs = () => {
  return (
    <Container>
      <div className="container-fluid m-3 pt-5">
        <h1 className="display-3">To Do in NextJs</h1>
        <ul>
          <li className="h5">{"I'm Developer an i try to learn"}</li>
          <li className="h5">I want to be a senior dev</li>
          <li className="h5">I love to programming</li>
        </ul>
      </div>
    </Container>
  );
};

export default AboutUs;
