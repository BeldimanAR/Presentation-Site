import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
  FIX_SPACING,
} from "constants/variables";

export const CardsContainer = styled.div`
  height: 500px;
  // width: 100vw;
`;

export const CardWrapper = styled.div<{ index: number }>(
  ({ index }) => css`
    margin-left: 20px;
    height: 400px;
    width: 200px;
  `
);

export const Label = styled.p`
  font-family: ${FONT_FAMILY.inter};
  font-size: ${FONT_SIZE.max40};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${COLORS.primaryBlue};
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    font-size: ${FONT_SIZE.max60};
    text-align: center;
    padding: 0;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100vw;
  height: 540px;
  position: relative;
  padding: ${FIX_SPACING.max80} 0 0 0;
  // background: fasfasf;
  // background: red;
  display: flex;

  div > .react-multi-carousel-list > ul > li {
    width: 100px;
    height: 500px;
  }
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    padding: ${FIX_SPACING.max120} ${FIX_SPACING.max20};
    margin: 0;
    padding: 0 15px 0 15px;
  }
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  font-size: 50px;
  gap: 40px;
`;
