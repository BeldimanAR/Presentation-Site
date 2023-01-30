// LIBRARIES
import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";

import { IStyled } from "components/Atoms/CustomTitle/CustomTitleModel";

export const CustomTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const TitleContainer = styled.span<IStyled>(
  ({ titleStyle }) => css`
    ${titleStyle === "primary" &&
    css`
      font-family: ${FONT_FAMILY.inter};
      font-size: ${FONT_SIZE.max40};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.primaryBlue};

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
      }
    `}
    ${titleStyle === "secondary" &&
    css`
      font-family: ${FONT_FAMILY.inter};
      font-size: ${FONT_SIZE.max40};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.backgroundColor};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        /* font-size: 60px; */
        text-align: center;
      }
    `}
    ${titleStyle === "modalContent" &&
    css`
      font-family: ${FONT_FAMILY.inter};
      font-size: ${FONT_SIZE.max40v24};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.primaryDarkBlue};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        /* font-size: 60px; */
        text-align: center;
      }
    `}

    ${titleStyle === "terms" &&
    css`
      font-family: ${FONT_FAMILY.inter};
      font-size: ${FONT_SIZE.max60v30};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.primaryDarkBlue};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        /* font-size: 60px; */
        text-align: center;
        font-size: ${FONT_SIZE.max80};
      }
    `}
  `
);

export const SubtitleContainer = styled.span<{ subtitleStyle: string }>(
  ({ subtitleStyle }) => css`
    ${subtitleStyle === "primary" &&
    css`
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      font-size: ${FONT_SIZE.max30};
      color: ${COLORS.primaryDarkBlue};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        text-align: center;
        font-weight: ${FONT_WEIGHT.semiBold};
      }
    `}
    ${subtitleStyle === "secondary" &&
    css`
      font-size: ${FONT_SIZE.max18};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.primaryBlack};

      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        font-size: ${FONT_SIZE.max24};
        text-align: center;
      }
    `}
    ${subtitleStyle === "modalContent" &&
    css`
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
      font-size: ${FONT_SIZE.max30v16};
      color: ${COLORS.primaryBlue};
      display: flex;
      justify-content: center;
      text-align: center;

      letter-spacing: -0.6px;
    `}
  `
);
