import React from "react";
import { Container, Header, Icon, Segment } from "semantic-ui-react";

const ApodTitle = () => {
  return (
    <Container>
      <Header as="h1" block>
        <div>
          <Icon name="space shuttle" />
          <Header.Content>A.P.O.D.</Header.Content>
        </div>
      </Header>
      <Segment>
        <p>From the NASA website:</p>
        <blockquote cite="https://api.nasa.gov/api.html#apod">
          One of the most popular websites at NASA is the{" "}
          <strong>Astronomy Picture of the Day</strong>. In fact, this website
          is one of the most popular websites across all federal agencies.
        </blockquote>
      </Segment>
    </Container>
  );
};

export default ApodTitle;
