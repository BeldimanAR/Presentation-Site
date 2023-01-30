import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardImage = styled.div<{ image: string }>(
  ({ image }) => css`
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      border-radius: 8px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  `
);

export const CardBackdrop = styled.div<{ height: string }>(
  ({ height }) => css`
    // height: 100%;
    // width: 100%;
    // background-color: ${COLORS.primaryDarkBlue}66;
    //
    // border-radius: 10px;
    //
    // @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   height: ${height};
    //   border-radius: 2px 2px 8px 8px;
    // }
  `
);

export const CardText = styled.p`
  text-align: left;
  text-transform: capitalize;
  font-size: ${FONT_SIZE.max20};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${COLORS.backgroundColor};
  padding: 30px 40px 0;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    font-size: 24px;
    text-align: center;
    text-transform: none;
    font-weight: ${FONT_WEIGHT.semiBold};
    margin: 0 40px 0 40px;
  }
`;

export const CardIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const CardIcon = styled.img`
  width: 28%;
`;

export const CardIconTitle = styled.p`
  font-weight: ${FONT_WEIGHT.semiBold};
  font-size: ${FONT_SIZE.max24};
  font-family: ${FONT_FAMILY.inter};
  color: ${COLORS.backgroundColor};
  text-transform: capitalize;
  /* letter-spacing: 3px; */
`;
