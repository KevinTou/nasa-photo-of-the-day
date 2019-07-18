import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";

const ApodCard = ({ data }) => {
  const getMedia = () => {
    if (data.media_type === "image") {
      return <Image src={data.url} alt="temp" />;
    } else if (data.media_type === "video") {
      return <iframe src={data.url} width="500" height="300" title="temp" />;
    }
  };

  return (
    <Segment className="apod-card">
      <Header>{data.title}</Header>
      <Header sub>Date: {data.date}</Header>
      {getMedia()}
      <Segment>
        <strong>Explanation</strong>: {data.explanation}
      </Segment>
    </Segment>
  );
};

export default ApodCard;
