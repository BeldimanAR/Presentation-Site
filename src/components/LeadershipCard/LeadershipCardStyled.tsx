import styled, { css, keyframes } from "styled-components";

import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";

export const LeadershipCardContainer = styled.div<{ image: string }>(
  ({ image }) => css`
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    font-family: ${FONT_FAMILY.inter};
    background-size: cover;
    background-color: rgba(16, 41, 112, 0.4);
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.5s ease all;
    background-blend-mode: multiply;
    position: relative;
    border-radius: 8px;

    &:hover {
      background-color: rgba(16, 41, 112, 0);
    }

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      height: 100%;
      background-color: rgba(16, 41, 112, 0);
    }
  `
);

export const LeadershipCardTextContainer = styled.div`
  width: 100%;
  height: 22%;
  background-color: ${COLORS.backgroundColor};
  display: flex;
  flex-direction: column;

  align-items: center;
  transition: 0.4s ease-in all;

  gap: 20px;
  border-radius: 4px;

  &:hover {
    height: 30%;
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      height: 22%;
    }
  }

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
  }
`;

export const LeadershipCardNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    margin-top: 15px;
    justify-content: center;
    /* gap: 5px; */
  }
`;

export const LeadershipCardName = styled.p`
  color: ${COLORS.primaryDarkBlue};
  font-size: ${FONT_SIZE.max24};
  font-weight: ${FONT_WEIGHT.semiBold};
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;
export const MobileButton = styled.button`
  width: 77px;
  height: 36px;
  color: ${COLORS.primaryOrange};
  font-weight: ${FONT_WEIGHT.semiBold};
  font-size: ${FONT_SIZE.max16};
  border: none;
  background-color: transparent;
  padding-bottom: 10px;
  @media (max-width: 900px) {
    font-size: 18px;
    padding-bottom: 0px;
    width: 100%;
  }
`;

export const LeadershipCardOcupation = styled.p`
  color: ${COLORS.primaryBlue};
  font-size: 11px;
  font-weight: ${FONT_WEIGHT.regular};
  text-align: center;
  @media (max-width: 1400px) {
    font-size: ${FONT_SIZE.max14};
    /* font-weight: bold; */
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const LeadershipBtnContainer = styled.div<{ isHover: boolean }>(
  ({ isHover }) => css`
    opacity: ${isHover ? 1 : 0};
    transition: opacity 0.5s ease-in-out;
    margin-top: 10px;
    button {
      span {
        font-size: ${FONT_SIZE.max18};
        font-weight: ${FONT_WEIGHT.bold};

        img {
          width: 40%;
          height: 20px;
          filter: brightness(0) saturate(100%) invert(12%) sepia(32%)
            saturate(6853%) hue-rotate(222deg) brightness(87%) contrast(96%);
        }
      }
    }
  `
);
