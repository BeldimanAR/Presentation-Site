import styled, { css, keyframes } from "styled-components";
import { COLORS, DEVICE_SIZE } from "constants/variables";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const CustomProjectCardContainer = styled.div<{
  image: string;
  isExpanded: boolean;
  isHovered: boolean;
  projectCard?: boolean;
}>(
  ({ image, isExpanded, isHovered, projectCard }) => css`
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: width 1s, height 1s;

    ${isExpanded &&
    css`
      width: 40vw;
      height: 100%;

      /* min-width: 300px; */
    `}
    ${projectCard &&
    css`
      width: 100%;
      height: 100%;
      /* min-width: 300px; */
    `}
    ${!isExpanded &&
    css`
      width: ${isHovered ? "160px" : "120px"};
      height: 90%;
      min-width: 120px;
    `}
  `
);

export const CustomCardTextContainer = styled.div<{
  isExpanded: boolean;
}>(
  ({ isExpanded }) => css`
    display: flex;

    padding: 5%;
    background: ${COLORS.primaryDarkBlue}99;
    border-radius: 2px 2px 8px 8px;

    animation: ${isExpanded ? fadeIn : fadeOut} 0.3s;
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      display: flex;
      justify-content: center;
      min-height: 38.8%;
      align-items: center;
    }
  `
);
