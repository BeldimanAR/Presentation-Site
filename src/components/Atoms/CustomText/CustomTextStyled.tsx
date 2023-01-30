// LIBRARIES
import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
  FIX_SPACING,
} from "constants/variables";

import { IStyled } from "components/Atoms/CustomText/CustomTextModel";

export const TextWrapper = styled.div<IStyled>(
  ({ textStyle }) => css`
    width: 100%;
    height: 100%;
    ${textStyle === "project" &&
    css`
      width: 60%;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: ${FIX_SPACING.max20};
      }
    `}
    ${textStyle === "projectPage" &&
    css`
      width: 100%;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: ${FIX_SPACING.max20};
      }
    `}
    ${textStyle === "paragraphDark" &&
    css`
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: ${FIX_SPACING.max40};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        gap: ${FIX_SPACING.max20};
      }
    `}
    ${textStyle === "contactUs" &&
    css`
      width: 100%;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        width: 100%;
      }
    `}
    ${textStyle === "faq" &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        width: 100%;
        gap: ${FIX_SPACING.max10};
      }
    `}
  `
);

export const Title = styled.p<IStyled>(
  ({ textStyle }) => css`
    ${textStyle === "hero" &&
    css`
      font-size: ${FONT_SIZE.max60};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.backgroundColor};
      text-transform: capitalize;

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "primary" &&
    css`
      font-size: ${FONT_SIZE.max60};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.primaryDarkBlue};
      text-transform: capitalize;
      letter-spacing: 1.2px;
    `}
    ${textStyle === "card" &&
    css`
      font-size: ${FONT_SIZE.max24v18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.backgroundColor};
      text-transform: capitalize;
      letter-spacing: 1.2px;
      text-align: left;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "paragraphDark" &&
    css`
      font-size: ${FONT_SIZE.max40};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.primaryBlue};
      text-transform: capitalize;
      letter-spacing: 1.2px;
      /* margin: 0 0 ${FIX_SPACING.max20} 0; */

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
        margin: 0;
        letter-spacing: 0px;
      }
    `}
    ${textStyle === "faq" &&
    css`
      font-size: ${FONT_SIZE.max40};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.primaryBlue};
      text-transform: capitalize;
      letter-spacing: 1.2px;
      /* margin: 0 0 ${FIX_SPACING.max40} 0; */

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
        margin: 0;
      }
    `}
    ${textStyle === "paragraphLight" &&
    css`
      font-size: ${FONT_SIZE.max40};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.backgroundColor};
      text-transform: capitalize;
      letter-spacing: 1.2px;
      margin: 0 0 ${FIX_SPACING.max40} 0;

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}

    ${textStyle === "project" &&
    css`
      font-size: ${FONT_SIZE.max30};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.backgroundColor};
      text-transform: capitalize;
      letter-spacing: 1.2px;
      text-align: left;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "projectPage" &&
    css`
      font-size: ${FONT_SIZE.max30};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.backgroundColor};
      text-transform: capitalize;
      letter-spacing: 1.2px;
      text-align: left;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
  `
);

export const Line = styled.p<IStyled>(
  ({ textStyle }) => css`
    ${textStyle === "project" &&
    css`
      height: 2px;
      background-color: ${COLORS.backgroundColor};
      width: 40%;
    `}
  `
);

export const Text = styled.p<IStyled>(
  ({ textStyle }) => css`
    ${textStyle === "hero" &&
    css`
      font-size: ${FONT_SIZE.max24};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.backgroundColor};
      text-align: left;
      padding: ${FIX_SPACING.max20} 0 0 0;

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
        padding: ${FIX_SPACING.max10} 0 0 0;
      }
    `}
    ${textStyle === "primary" &&
    css`
      font-size: ${FONT_SIZE.max30};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.primaryDarkBlue};
      letter-spacing: 1.2px;
      text-align: justify;
      text-justify: inter-word;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "card" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.backgroundColor};
      text-align: left;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /* -webkit-line-clamp: 3; // number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;
      padding: ${FIX_SPACING.max20} 0 0 0;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
        -webkit-line-clamp: auto;
      }
    `}
    ${textStyle === "paragraphDark" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.primaryBlack};

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "paragraphLight" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.secondaryGrey};

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "project" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.backgroundColor};
      text-align: left;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "projectPage" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.backgroundColor};
      text-align: left;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${textStyle === "contactUs" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.backgroundColor};
      text-align: left;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
        margin: 0 ${FIX_SPACING.max50};
        font-weight: ${FONT_WEIGHT.semiBold};
      }
    `}
    ${textStyle === "modalContent" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.primaryBlack};

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
        font-size: ${FONT_SIZE.max24};
      }
    `}
    ${textStyle === "faq" &&
    css`
      font-size: ${FONT_SIZE.max30};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.primaryDarkBlue};

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        /* font-size: ${FONT_SIZE.max24}; */
        text-align: center;
      }
    `}
  `
);
