import React from "react";

const ApodTitle = () => {
  return (
    <>
      <h1 className="title">A.P.O.D.</h1>
      <section className="description">
        <p>From the NASA website:</p>
        <blockquote cite="https://api.nasa.gov/api.html#apod">
          One of the most popular websites at NASA is the{" "}
          <strong>Astronomy Picture of the Day</strong>. In fact, this website
          is one of the most popular websites across all federal agencies.
        </blockquote>
      </section>
    </>
  );
};

export default ApodTitle;
