import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <StyledWrapper>
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{text}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: "Poppins", sans-serif;
  }

  button.learn-more {
    width: 12rem;
    height: 3.5rem;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3.5rem;
    height: 2.5rem;
    background: #2c2c2c; /* escuro do site */
    border-radius: 1.75rem;
    border: 2px solid #61dafb; /* borda azul */
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #61dafb; /* azul do tema */
  }

  button.learn-more .circle .icon.arrow {
    left: 0.75rem;
    width: 1.25rem;
    height: 0.35rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.3rem;
    right: 0.0625rem;
    width: 0.65rem;
    height: 0.65rem;
    border-top: 0.15rem solid #61dafb;
    border-right: 0.15rem solid #61dafb;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 2rem;
    color: #61dafb; /* azul do site */
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
    background-color: #61dafb;
  }

  button:hover .circle .icon.arrow {
    transform: translate(1rem, 0);
    border-color: #1e1e1e;
  }

  button:hover .button-text {
    color: #1e1e1e;
  }
`;

export default Button;