// LIBRARIES
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
  translate: 50px;
  opacity: 1;
}`;

export const ButtonWrapper = styled.div<IStyled>(
  ({ buttonStyle }) => css`
    width: 100%;
    height: 100%;
    /* margin-left: 200px; */

    /* ${buttonStyle === "tertiary" &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `} */
  `
);

export const ButtonComponent = styled.button<IStyled>(
  ({ buttonStyle, isSelected }) => css`
    ${buttonStyle === "primaryLight" &&
    css`
      width: 100%;
      height: 100%;
      border: none;
      cursor: pointer;
      background-color: transparent;

      > span {
        color: ${COLORS.primaryDarkBlue};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.regular};
        font-size: ${FONT_SIZE.max20};
        position: relative;
        text-transform: capitalize;

        ::after {
          content: "";
          height: 2px;
          display: block;
          position: absolute;
          bottom: -2px;
          left: 0;
          width: ${isSelected ? "100%" : "0"};
          background: ${isSelected ? COLORS.primaryDarkBlue : "transparent"};
          transition: width 0.3s ease, background-color 0.3s ease,
            left 0.3s ease;
        }
      }

      ${!isSelected &&
      css`
        &:hover > span {
          color: ${COLORS.primaryDarkBlue};
          ::after {
            background-color: ${COLORS.primaryDarkBlue};
            width: 100%;
            left: 0;
          }
        }
      `}
    `}
    ${buttonStyle === "primaryDark" &&
    css`
      width: 100%;
      height: 100%;
      border: none;
      cursor: pointer;
      background-color: transparent;

      > span {
        color: ${COLORS.backgroundColor};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.regular};
        font-size: ${FONT_SIZE.max20};
        position: relative;
        text-transform: capitalize;

        ::after {
          content: "";
          height: 2px;
          display: block;
          position: absolute;
          bottom: -2px;
          left: 0;
          width: ${isSelected ? "100%" : "0"};
          background: ${isSelected ? COLORS.backgroundColor : "transparent"};
          transition: width 0.3s ease, background-color 0.3s ease,
            left 0.3s ease;
        }
      }

      ${!isSelected &&
      css`
        &:hover > span {
          color: ${COLORS.backgroundColor};
          ::after {
            background-color: ${COLORS.backgroundColor};
            width: 100%;
            left: 0;
          }
        }
      `}
    `}
    ${buttonStyle === "primaryHomepage" &&
    css`
      width: 100%;
      height: 100%;
      border: none;
      cursor: pointer;
      background-color: transparent;

      > span {
        color: ${COLORS.backgroundColor};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.semiBold};
        font-size: ${FONT_SIZE.max30};
        position: relative;

        ::after {
          content: "";
          height: 3px;
          display: block;
          position: absolute;
          bottom: 0;
          left: ${isSelected ? "0" : "50%"};
          width: ${isSelected ? "100%" : "0"};
          background: ${isSelected ? COLORS.backgroundColor : "transparent"};
          transition: width 0.3s ease, background-color 0.3s ease,
            left 0.3s ease;
        }
      }

      ${!isSelected &&
      css`
        &:hover > span {
          color: ${COLORS.backgroundColor};
          ::after {
            background-color: ${COLORS.backgroundColor};
            width: 100%;
            left: 0;
          }
        }
      `}
    `}

    ${buttonStyle === "secondary" &&
    css`
      width: 100%;
      height: 100%;
      background-color: ${isSelected
        ? COLORS.primaryBlue
        : COLORS.primaryDarkBlue};
      border: none;
      border-radius: 3px;
      cursor: pointer;

      > span {
        color: ${COLORS.backgroundColor};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.bold};
        font-size: ${FONT_SIZE.max24};
        text-transform: capitalize;
        letter-spacing: 1.2px;
      }

      ${!isSelected &&
      ` &:hover {
        background-color: ${COLORS.primaryBlue};
      }`}
    `}
    

    ${buttonStyle === "tertiary" &&
    css`
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: transform 0.5s ease;

      > span {
        position: relative;
        color: ${COLORS.primaryDarkBlue};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.semiBold};
        font-size: ${FONT_SIZE.max24};
        text-transform: capitalize;
        letter-spacing: 1.2px;
        padding-left: 4px;

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
          left: -50px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }

      &:hover {
        transform: translateX(-50px);

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
      }
    `}
    ${buttonStyle === "tertiaryHomepage" &&
    css`
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: transform 0.5s ease;

      > span {
        position: relative;
        color: ${COLORS.backgroundColor};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.semiBold};
        font-size: ${FONT_SIZE.max24};
        text-transform: capitalize;
        letter-spacing: 1.2px;
        padding-left: 4px;

        #arrow {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          opacity: 0;
          filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(212%) hue-rotate(61deg) brightness(115%) contrast(87%);
        }

        #line {
          position: absolute;
          left: -50px;
          top: 0;
          bottom: 0;
          margin: auto;
          filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(212%) hue-rotate(61deg) brightness(115%) contrast(87%);
        }
      }

      &:hover {
        transform: translateX(-50px);

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
      }
    `}

    ${buttonStyle === "primaryFooter" &&
    css`
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      cursor: pointer;

      > span {
        color: ${COLORS.backgroundColor};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.semiBold};
        font-size: ${FONT_SIZE.max20};
        text-transform: capitalize;
        letter-spacing: 1px;
        position: relative;

        ::after {
          content: "";
          height: 2px;
          border-radius: 2px;
          display: block;
          position: absolute;
          bottom: 0;
          left: ${isSelected ? "0" : "50%"};
          width: ${isSelected ? "100%" : "0"};
          background: ${isSelected ? "#d5d9de" : "transparent"};
          transition: width 0.3s ease, background-color 0.3s ease,
            left 0.3s ease;
        }
      }

      ${!isSelected &&
      css`
        &:hover > span {
          ::after {
            background-color: #d5d9de;
            width: 100%;
            left: 0;
          }
        }
      `}
    `}
    ${buttonStyle === "contactUs" &&
    css`
      width: 100%;
      height: 100%;
      border: 10px;
      border-radius: 3px;
      background-color: ${COLORS.primaryOrange};
      cursor: pointer;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        
        border-radius: 4px;
      } 
      > span {
        color: ${COLORS.backgroundColor};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.semiBold};
        font-size: ${FONT_SIZE.max18};
        text-transform: capitalize;
        @media (max-width: ${DEVICE_SIZE.MOBILE}) {
          /* font-size: 30px; */
          font-weight: ${FONT_WEIGHT.regular};   
      }
      }
      :hover {
          background-color: ${COLORS.primaryDarkBlue};
          
          @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        background-color:${COLORS.primaryOrange} ;
      } 
        }

      }


    `}
    ${buttonStyle === "sideMenuDark" &&
    css`
    width: 100%;
      height: 100%;
      border: none;
      cursor: pointer;
      background-color: transparent;
      -webkit-tap-highlight-color: transparent;


      > span {
        color: ${COLORS.primaryDarkBlue};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.regular};
        font-size: ${FONT_SIZE.max60v30};
        /* position: relative; */
        text-transform: capitalize;
    `}
    ${buttonStyle === "sideMenuLight" &&
    css`
    width: 100%;
      height: 100%;
      border: none;
      cursor: pointer;
      background-color: transparent;
      -webkit-tap-highlight-color: transparent;


      > span {
        color: ${COLORS.backgroundColor};
        font-family: ${FONT_FAMILY.inter};
        font-weight: ${FONT_WEIGHT.regular};
        font-size: ${FONT_SIZE.max60v30};
        /* position: relative; */
        text-transform: capitalize;
    `}
  `
);

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
