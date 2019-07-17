import React from "react";

const ApodCard = ({ data }) => {
  const getMedia = () => {
    if (data.media_type === "image") {
      return <img src={data.url} alt="temp" width="500" height="500" />;
    } else if (data.media_type === "video") {
      return <iframe src={data.url} width="500" height="500" title="temp" />;
    }
  };

  return (
    <section className="apod-card">
      <h2 className="apod-title">{data.title}</h2>
      {getMedia()}
      <p className="apod-explanation">
        <strong>Explanation</strong>: {data.explanation}
      </p>
    </section>
  );
};

export default ApodCard;
