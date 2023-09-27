import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";
import { scaleUp, click } from "./animations";
import { FaSearch, FaBackspace } from "react-icons/fa";
import { key } from "../apiKey";
import "../styles/styles.css";
import WeatherData from "./WeatherData";

const Wizard = () => {
  let inputText = document.getElementById("input-box");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState([
    {
      icon: "",
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
            icon: res.data.weather[0].icon,
          });
          //console.log(data.icon);
        })
        .catch((err) => console.log(err));
      console.log(data.icon);
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
          variants={scaleUp}
          initial="initial"
          animate="show"
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
        <WeatherData data={data} show={show} />
      </StyledLowerBody>
    </StyledBody>
  );
};

const StyledBody = styled.div``;

const StyledUpperBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    .btn-div {
      display: flex;
    }
  }
  .btn-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLowerBody = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled(motion.input)`
  font-family: "Manrope", sans-serif;
  font-weight: bold;
  background-color: ghostwhite;
  width: 59%;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid #32174d;
  font-size: 1.75rem;
  color: #32174d;
  margin: 0.5rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 1rem;
    width: 80vw;
  }
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
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 0rem;
    width: 86vw;
    height: 3rem;
  }
`;

export default Wizard;
