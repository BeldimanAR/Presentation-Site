import styled, { css, keyframes } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";

// MISC
import { IStyled } from "components/Atoms/CustomButton/CustomButtonModel";

const arrowInAnimation = keyframes`
0% {
  translate: 50px;
  opacity: 1;
}
100% {
  translate: 0px;
  opacity: 0;
}
  
`;

const arrowOutAnimation = keyframes`
0% {
  translate: 0px;
  opacity: 0;
}
100% {
  translate: 60px;
  opacity: 1;
}`;

const lineInAnimation = keyframes`
0% {
  translate: 0px;
  opacity: 1;
}
100% {
  translate: 70px;
  opacity: 0;
}`;

const lineOutAnimation = keyframes`
0% {
  translate: 70px;
  opacity: 0;
}
100% {
  translate: 0px;
  opacity: 1;
}`;

export const ButtonWrapper = styled.div`
  /* min-width: 170px; */
  /* width: 100%; */
  /* max-width: 200px; */
  height: 100%;
`;
export const ButtonComponent = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.5s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > span {
    position: relative;
    color: ${COLORS.primaryDarkBlue};
    font-family: ${FONT_FAMILY.inter};
    font-weight: ${FONT_WEIGHT.semiBold};
    font-size: ${FONT_SIZE.max18};
    left: 60px;
    /* text-transform: capitalize; */
    /* letter-spacing: 1.2px; */
    /* padding-left: 4px; */

    #arrow {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: 0;
    }

    #line {
      position: absolute;
      left: -60px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  &:hover {
    transform: translateX(-60px);

    #arrow {
      animation: ${arrowOutAnimation} 0.5s ease forwards;
    }

    #line {
      animation: ${lineInAnimation} 0.5s ease forwards;
    }
  }

  &:not(:hover) {
    #arrow {
      animation: ${arrowInAnimation} 0.5s ease;
    }
    #line {
      animation: ${lineOutAnimation} 0.5s ease;
    }
  }
`;

export const ButtonText = styled.span``;
export const ButtonArrow = styled.img``;
export const ButtonLine = styled.img`
  /* width: 50px;
  height: 2px;
  border-radius: 2px;
  background-color: ${COLORS.primaryBlue}; */
  /* position: absolute;
  left: 0; */
`;
