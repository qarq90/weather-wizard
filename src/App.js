import React from "react";
import styled from "styled-components";
import Wizard from "./components/Wizard";
import { FaHatWizard } from "react-icons/fa";

function App() {
  return (
    <div>
      <StyledTitle>
        <FaHatWizard className="title-icon" />
        <h1>Weather Wizard</h1>
        <FaHatWizard className="title-icon" />
      </StyledTitle>
      <Wizard />
    </div>
  );
}

const StyledTitle = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .title-icon {
    margin: 0rem 2rem;
    font-size: 1.75rem;
  }
`;

export default App;
