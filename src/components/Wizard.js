import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";
import { scaleUp, click } from "./animations";
import { FaSearch, FaBackspace } from "react-icons/fa";
import { key } from "../apiKey";
import "../styles/styles.css";
import eye from "../icons/eye.png";
import city from "../icons/city.png";
import wind from "../icons/wind.png";
import humidity from "../icons/humidity.png";
import pressure from "../icons/pressure.png";
import latitude from "../icons/latitude.png";
import longitude from "../icons/longitude.png";
import temperature from "../icons/temperature.png";
import temperature_outside from "../icons/temperature_outside.png";
const Wizard = () => {
  let inputText = document.getElementById("input-box");
  const [show, setShow] = useState(false);
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
          if (inputText.value === "") {
            setShow(false);
          } else {
            setShow(true);
          }
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
    } else {
      alert("Enter a Valid City or Country name...");
    }
  };
  const clearHandler = () => {
    let clearInput = document.getElementById("input-box");
    if (clearInput.value === "") {
      alert("Input Field is already Empty...");
    } else {
      clearInput.value = "";
      setShow(false);
    }
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
        <InputButtons variants={click} whileTap="show" onClick={fetchHandler}>
          <FaSearch
            size={30}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </InputButtons>
        <InputButtons onClick={clearHandler} variants={click} whileTap="show">
          <FaBackspace
            size={30}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </InputButtons>
      </StyledUpperBody>
      <StyledLowerBody>
        <Cards variants={scaleUp} initial="initial" animate="show">
          <Card variants={scaleUp} className="city-name">
            <div>
              <img src={city} alt="weather-icons" />
            </div>
            <div>
              <h3>City Name: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.name} , {data.country}
              </p>
            </div>
          </Card>
          <Card variants={scaleUp} className="city-temp">
            <div>
              <img src={temperature} alt="weather-icons" />
            </div>
            <div>
              <h3>Temperature: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.celcius}°c
              </p>
            </div>
          </Card>
          <Card variants={scaleUp} className="city-pressure">
            <div>
              <img src={pressure} alt="weather-icons" />
            </div>
            <div>
              <h3>Pressure: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.pressure} p
              </p>
            </div>
          </Card>
          <Card variants={scaleUp} className="city-des">
            <div>
              <img src={temperature_outside} alt="weather-icons" />
            </div>
            <div>
              <h3>Current Status: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.des}
              </p>
            </div>
          </Card>
          <Card variants={scaleUp} className="city-humidity">
            <div>
              <img src={humidity} alt="weather-icons" />
            </div>
            <div>
              <h3>Humidity: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.humidity}%
              </p>
            </div>
          </Card>
          <Card variants={scaleUp} className="city-wind">
            <div>
              <img src={wind} alt="weather-icons" />
            </div>
            <div>
              <h3>Wind Speed: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.wind}kn
              </p>
            </div>
          </Card>

          <Card variants={scaleUp} className="city-visibility">
            <div>
              <img src={eye} alt="weather-icons" />
            </div>
            <div>
              <h3>Visibility: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.visibility}
              </p>
            </div>
          </Card>
          <Card variants={scaleUp} className="city-lon">
            <div>
              <img src={longitude} alt="weather-icons" />
            </div>
            <div>
              <h3>Longitude: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.coLon}°
              </p>
            </div>
          </Card>
          <Card variants={scaleUp} className="city-lat">
            <div>
              <img src={latitude} alt="weather-icons" />
            </div>
            <div>
              <h3>Latitude: </h3>
              <p className={`${show ? "text-show" : "text-hide"}`}>
                {data.coLat}°
              </p>
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

const Cards = styled(motion.div)`
  margin-top: 0rem;
  width: 71vw;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
`;

const Card = styled(motion.div)`
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
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
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

const InputButtons = styled(motion.div)`
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
