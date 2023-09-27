import React from "react";
import { motion } from "framer-motion";
import { scaleUp } from "./animations";
import styled from "styled-components";
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

const WeatherData = ({ data, show }) => {
  return (
    <>
      <Cards variants={scaleUp} initial="initial" animate="show">
        <Card variants={scaleUp} className="city-name">
          <div>
            <img src={city} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>City Name: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.name} , {data.country}
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-temp">
          <div>
            <img src={temperature} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Temperature: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.celcius}°c
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-pressure">
          <div>
            <img src={pressure} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Pressure: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.pressure} p
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-des">
          <div>
            <img src={temperature_outside} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Current Status: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>{data.des}</p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-humidity">
          <div>
            <img src={humidity} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Humidity: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.humidity}%
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-wind">
          <div>
            <img src={wind} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Wind Speed: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.wind}kn
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-visibility">
          <div>
            <img src={eye} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Visibility: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.visibility}
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-lon">
          <div>
            <img src={longitude} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Longitude: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.coLon}°
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
        <Card variants={scaleUp} className="city-lat">
          <div>
            <img src={latitude} alt="weather-icons" />
          </div>
          <div className="infoDiv">
            <h3>Latitude: </h3>
            <p className={`${show ? "text-show" : "text-hide"}`}>
              {data.coLat}°
            </p>
            <h4 className={`${show ? "text-hide" : "text-show"}`}>
              [Enter a city name first]
            </h4>
          </div>
        </Card>
      </Cards>
    </>
  );
};

const Cards = styled(motion.div)`
  width: 72vw;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 95vw;
  }
`;

const Card = styled(motion.div)`
  font-family: sans-serif;
  display: flex;
  color: ghostwhite;
  background-color: #574685;
  align-items: center;
  height: 6rem;
  width: auto;
  border: 2px solid #ffd700;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 1rem;
  h3 {
    width: 9rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
  }
  div {
    img {
      margin-left: 20%;
      margin-right: 20%;
      width: 4rem;
    }
    width: 50%;
  }
  .infoDiv{
    width: 100%;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px){
      width: 50%;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 0.5rem;
    padding: 0;
    border: 2px solid ghostwhite;
    border-radius: 10px;
    width: 85vw;
    height: 7rem;
    div {
      width: 50%;
      img {
        width: 5rem;
      }
    }
  }
`;

export default WeatherData;
