import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
  FIX_SPACING,
} from "constants/variables";

export const Container = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
  }
`;

export const HeroContainer = styled.div`
  height: 440px;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.secondaryGrey};
  padding: ${FIX_SPACING.max120} ${FIX_SPACING.max110};
  border-radius: 0 0 15px 15px;
  box-shadow: 0 5px 10px #0000001a;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    padding: ${FIX_SPACING.max60} 0px ${FIX_SPACING.max80};
    row-gap: ${FIX_SPACING.max80};
  }
`;

export const CarouselContainer = styled.div`
  /* height: 640px; */
  display: flex;
  flex-direction: column;
  padding: 0 ${FIX_SPACING.max120};
  margin: ${FIX_SPACING.max120} 0;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0;
    margin: 0;
    /* height: 700px; */
  }
`;

export const Wrapper = styled.div<{ width?: string; height?: string }>(
  ({ width, height }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: ${width};
    ${height &&
    css`
      height: ${height};
    `}

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      height: 100%;
      ${height &&
      css`
        height: ${height};
      `}
      padding: 0px 10px 0px
    }
  `
);

export const CarouselTitle = styled.p`
  font-family: ${FONT_FAMILY.inter};
  font-size: ${FONT_SIZE.max40};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${COLORS.primaryBlue};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    font-size: ${FONT_SIZE.max60v30};
    text-align: center;
    padding: 0 ${FIX_SPACING.max60};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: ${FIX_SPACING.max120};
  padding: 0 ${FIX_SPACING.max120};
  margin: ${FIX_SPACING.max120} 0;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    padding: ${FIX_SPACING.max60} 0;
    margin: 0;
    gap: 0;
  }
`;

export const ProgressContainer = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 100%;
    justify-content: flex-start;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 540px;
  padding: ${FIX_SPACING.max80} 0 0 0;
`;
