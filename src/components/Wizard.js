import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch, FaBackspace } from "react-icons/fa";
import axios from "axios";
const Wizard = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([
    {
      celcius: 10 + "c",
      name: "London",
      humidity: 10,
      wind: 2,
      coLon: 50.5,
      coLat: 50.5,
    },
  ]);
  useEffect(() => {}, []);
  const fetchHandler = () => {
    if (name !== "") {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f52100a1e77852d08e5b63260b0747d3&units=metric`;
      axios
        .get(apiURL)
        .then((res) => {
          console.log(res.data);
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            wind: res.data.wind.speed,
            coLon: res.data.coord.lon,
            coLat: res.data.coord.lat,
          });
        })
        .catch((err) => console.log(err));
    }
  };
  const clearHandler = () => {
    let clearInput = document.getElementById("input-box");
    clearInput.value = "";
  };
  return (
    <StyledBody>
      <StyledUpperBody>
        <StyledInput
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="input-box"
          placeholder="Enter your city here:"
        ></StyledInput>
        <InputButtons onClick={fetchHandler}>
          <FaSearch
            size={30}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </InputButtons>
        <InputButtons>
          <FaBackspace
            onClick={clearHandler}
            size={30}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </InputButtons>
      </StyledUpperBody>
      <StyledLowerBody>
        <Cards>
          <Card className="city-name">
            <h3>City Name: </h3>
            <p>{data.name}</p>
          </Card>
          <Card className="city-temp">
            <h3>Temperature: </h3>
            <p>{data.celcius}</p>
          </Card>
          <Card className="city-lon">
            <h3>Longitude: </h3>
            <p>{data.coLon}</p>
          </Card>
          <Card className="city-lat">
            <h3>Latitude: </h3>
            <p>{data.coLat}</p>
          </Card>
          <Card className="city-humidity">
            <h3>Humidity: </h3>
            <p>{data.humidity}</p>
          </Card>
          <Card className="city-wind">
            <h3>Wind Speed: </h3>
            <p>{data.wind}</p>
          </Card>
        </Cards>
      </StyledLowerBody>
    </StyledBody>
  );
};

const StyledBody = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
`;

const StyledUpperBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLowerBody = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  margin-top: 3rem;
  width: 70vw;
  //display: flex;
  //display: grid;
  //grid-template-columns: auto auto auto;
`;

const Card = styled.div`
  display: flex;
  color: ghostwhite;
  align-items: center;
  height: 3rem;
  width: 20rem;
  border: 2px solid ghostwhite;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  h3 {
    width: 9rem;
  }
  p {
    padding-top: 0.2rem;
    padding-left: 1rem;
  }
`;

const StyledInput = styled.input`
  font-family: "Manrope", sans-serif;
  font-weight: bold;
  background-color: ghostwhite;
  color: darkgray;
  width: 30em;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid #32174d;
  font-size: 1.75rem;
  color: #32174d;
  margin: 0.5rem;
`;

const InputButtons = styled.div`
  background-color: ghostwhite;
  color: #32174d;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border: 2px solid #32174d;
  border-radius: 10px;
  margin: 0.5rem;
  transition: 0.5s all ease;
  &:hover {
    cursor: pointer;
    color: #ffd700;
    background-color: #32174d;
    border: 2px solid #ffd700;
  }
`;

export default Wizard;
