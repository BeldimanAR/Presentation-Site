import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
  FIX_SPACING,
} from "constants/variables";

export const CustomHeroComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const HeroImage = styled.div<{ image: string }>(
  ({ image }) => css`
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
  `
);

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primaryBlack}66;
  display: flex;
  align-items: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  padding: 0px 0px 0px ${FIX_SPACING.max110};
  max-width: 43%;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    max-width: 100%;
    padding: 0px ${FIX_SPACING.max20};
  }
`;
