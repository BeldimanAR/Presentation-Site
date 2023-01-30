import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
} from "constants/variables";

export const CustomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TopLine = styled.div<{ topLine: string }>(
  ({ topLine }) => css`
    display: ${topLine ? "block" : "none"};
    float: right;
    width: ${topLine === "halfWidth" ? "50%" : "100%"};
    height: 2px;
    background-color: ${COLORS.primaryBlue};
    opacity: 0.8;
  `
);
export const Title = styled.span`
  font-size: ${FONT_SIZE.max30};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};
  color: ${COLORS.primaryDarkBlue};
  text-transform: capitalize;
  letter-spacing: 1.2px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FirstChildContainer = styled.div``;
export const SecondChildContainer = styled.div``;

export const BottomContainer = styled.div``;
export const BottomLine = styled.div<{ bottomLine: string }>(
  ({ bottomLine }) => css`
    display: ${bottomLine ? "block" : "none"};
    width: ${bottomLine === "halfWidth" ? "50%" : "100%"};
    height: 2px;
    background-color: ${COLORS.primaryBlue};
    opacity: 0.8;
  `
);
