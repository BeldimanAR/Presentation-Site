// LIBRARIES
import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
  FIX_SPACING,
  SPACING,
} from "constants/variables";

export const FooterContainer = styled.div`
  // width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -5px 10px #00000033;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
  }
`;

export const FooterContentContainer = styled.div`
  width: 100%;
  padding: 0 ${FIX_SPACING.max110};
  display: flex;
  flex-direction: row;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0 20px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: ${FIX_SPACING.max20};
    height: 40%;
    width: 100%;
    margin-top: ${FIX_SPACING.max40};
  }
`;

export const FooterContent = styled.div<{ side: string }>(
  ({ side }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    ${side === "left" &&
    css`
      align-items: flex-start;
      justify-content: start;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: ${FIX_SPACING.max20};
      }
    `}
    ${side === "center" &&
    css`
      flex-direction: column;
      justify-content: space-between;
      gap: ${SPACING.max60v30};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: ${FIX_SPACING.max50};
      }
    `}
      ${side === "right" &&
    css`
      align-items: flex-start;
      justify-content: end;
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        justify-content: center;
        align-items: center;

        text-align: center;
      }
    `}
  `
);

export const LogoContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 50px;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 32px;
    width: 65.7%;
  }
`;

export const FooterTermsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    gap: ${FIX_SPACING.max5};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const FooterTermsText = styled.span`
  text-transform: uppercase;
  font-size: ${FONT_SIZE.max16};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.regular};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* font-size: 12px; */
    text-align: center;
    letter-spacing: -1px;
  }
`;

export const FooterFindUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterFindUsText = styled.span<{ type: string }>(
  ({ type }) => css`
    ${type === "title" &&
    css`
      text-transform: capitalize;
      font-size: ${FONT_SIZE.max20};
      color: ${COLORS.backgroundColor};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.bold};
      margin: 0 0 ${FIX_SPACING.max20} 0;
    `}
    ${type === "text" &&
    css`
      font-size: ${FONT_SIZE.max18};
      color: ${COLORS.backgroundColor};
      font-family: ${FONT_FAMILY.inter};
      font-weight: ${FONT_WEIGHT.regular};
    `};
  `
);

export const FooterFollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${FIX_SPACING.max20};
`;

export const FooterFollowText = styled.span`
  text-transform: capitalize;
  font-size: ${FONT_SIZE.max24};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.bold};
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${SPACING.max40v30};
`;
