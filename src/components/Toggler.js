import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { FiSun } from "react-icons/fi";
import { IconContext } from "react-icons";
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 0px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      <IconContext.Provider
        value={{
          size: "1.25rem",
          className: "global-class-name",
        }}
      >
        <div>
          <FiSun />
        </div>
      </IconContext.Provider>
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
