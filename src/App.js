import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Icon } from "semantic-ui-react";

import "./App.css";
import ApodTitle from "./components/ApodTitle";
import ApodCard from "./components/ApodCard";
import DateSelector from "./components/DateSelector";

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState("2019-07-17");

  useEffect(() => {
    const getData = async () => {
      return await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          date: date,
          api_key: "DEMO_KEY"
        }
      });
    };

    getData()
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [date]);

  const handleChange = event => {
    setDate(event.target.value);
  };

  if (!data) {
    return (
      <Container text textAlign="center">
        <Header size="huge" block>
          <div>
            <Icon loading name="spinner" />
            <Header.Content>Loading...</Header.Content>
          </div>
        </Header>
      </Container>
    );
  }

  return (
    <Container text textAlign="center">
      <ApodTitle />
      <DateSelector handleChange={handleChange} />
      <ApodCard data={data} />
    </Container>
  );
}

export default App;
