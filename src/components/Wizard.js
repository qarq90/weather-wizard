import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch, FaBackspace } from "react-icons/fa";
import axios from "axios";
import { key } from "../apiKey";
import city from "../icons/city.png";
import humidity from "../icons/humidity.png";
import longitude from "../icons/longitude.png";
import latitude from "../icons/latitude.png";
import pressure from "../icons/pressure.png";
import wind from "../icons/wind.png";
import temperature from "../icons/temperature.png";
import eye from "../icons/eye.png";
import temperature_outside from "../icons/temperature_outside.png";
const Wizard = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([
    {
      pressure: "",
      celcius: "",
      name: "",
      country: "",
      humidity: "",
      wind: "",
      coLon: "",
      coLat: "",
      visibility: "",
      des: "",
    },
  ]);
  useEffect(() => {}, []);
  const fetchHandler = () => {
    if (name !== "") {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric`;
      axios
        .get(apiURL)
        .then((res) => {
          console.log(res.data);
          setData({
            ...data,
            pressure: res.data.main.pressure,
            celcius: res.data.main.temp,
            country: res.data.sys.country,
            name: res.data.name,
            humidity: res.data.main.humidity,
            wind: res.data.wind.speed,
            coLon: res.data.coord.lon,
            coLat: res.data.coord.lat,
            visibility: res.data.visibility,
            des: res.data.weather[0].description,
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
            <div>
              <img src={city} alt="weather-icons" />
            </div>
            <div>
              <h3>City Name: </h3>
              <p>
                {data.name} , {data.country}
              </p>
            </div>
          </Card>
          <Card className="city-temp">
            <div>
              <img src={temperature} alt="weather-icons" />
            </div>
            <div>
              <h3>Temperature: </h3>
              <p>{data.celcius}°c</p>
            </div>
          </Card>
          <Card className="city-pressure">
            <div>
              <img src={pressure} alt="weather-icons" />
            </div>
            <div>
              <h3>Pressure: </h3>
              <p>{data.pressure} p</p>
            </div>
          </Card>
          <Card className="city-des">
            <div>
              <img src={temperature_outside} alt="weather-icons" />
            </div>
            <div>
              <h3>Current Status: </h3>
              <p>{data.des}</p>
            </div>
          </Card>
          <Card className="city-humidity">
            <div>
              <img src={humidity} alt="weather-icons" />
            </div>
            <div>
              <h3>Humidity: </h3>
              <p>{data.humidity}%</p>
            </div>
          </Card>
          <Card className="city-wind">
            <div>
              <img src={wind} alt="weather-icons" />
            </div>
            <div>
              <h3>Wind Speed: </h3>
              <p>{data.wind}kn</p>
            </div>
          </Card>

          <Card className="city-visibility">
            <div>
              <img src={eye} alt="weather-icons" />
            </div>
            <div>
              <h3>Visibility: </h3>
              <p>{data.visibility}</p>
            </div>
          </Card>
          <Card className="city-lon">
            <div>
              <img src={longitude} alt="weather-icons" />
            </div>
            <div>
              <h3>Longitude: </h3>
              <p>{data.coLon}°</p>
            </div>
          </Card>
          <Card className="city-lat">
            <div>
              <img src={latitude} alt="weather-icons" />
            </div>
            <div>
              <h3>Latitude: </h3>
              <p>{data.coLat}°</p>
            </div>
          </Card>
        </Cards>
      </StyledLowerBody>
    </StyledBody>
  );
};

const StyledBody = styled.div``;

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
  margin-top: 0rem;
  width: 71vw;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
`;

const Card = styled.div`
  display: flex;
  background-color: ghostwhite;
  align-items: center;
  height: 6rem;
  width: auto;
  border: 2px solid ghostwhite;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 1rem;
  h3 {
    width: 9rem;
  }
  p {
    padding-top: 1rem;
    font-size: 1.25rem;
  }
  div {
    img {
      margin-left: 20%;
      margin-right: 20%;
      width: 4rem;
    }
    width: 50%;
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
