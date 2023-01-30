import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";
import { CircularProgressbar } from "react-circular-progressbar";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
`;

export const ProgressBarComponent = styled(CircularProgressbar)`
  width: 100%;
  height: 100%;
  && {
    & .CircularProgressbar-trail {
      stroke: ${COLORS.primaryLightBlue};
    }
    & .CircularProgressbar-path {
      stroke: ${COLORS.primaryBlue};
    }
  }
`;

export const ProgressBarTextWrapper = styled.div`
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;

export const ProgresBarText = styled.p`
  color: ${COLORS.primaryBlue};
  font-size: ${FONT_SIZE.max30v16};
  font-weight: ${FONT_WEIGHT.bold};
  font-family: ${FONT_FAMILY.inter};
  text-align: center;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* font-size: ${FONT_SIZE.max18v15}; */
  }
`;

export const PercentageContainer = styled.div`
  /* height: 60px; */
  padding: 7px 0px;
  background-color: ${COLORS.primaryOrange};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 60%;
  align-self: center;
`;

export const Percentage = styled.span`
  font-size: ${FONT_SIZE.max24};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* font-size: 15px; */
  }
`;
