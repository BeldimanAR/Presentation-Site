import styled, { css } from "styled-components";

import { COLORS, DEVICE_SIZE, FIX_SPACING, SPACING } from "constants/variables";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 15px;
  padding: ${SPACING.max40} ${SPACING.max110};

  box-shadow: 0px 10px 10px #0000001a;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardImage = styled.div<{ image: string }>(
  ({ image }) => css`
    width: 50%;

    background-image: url(${image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 15px 0px 0px 15px;
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      height: 47.8%;
      border-radius: 0px;
    }
  `
);

export const CardBackdrop = styled.div`
  height: 16.9%;
  width: 100%;
  background-color: ${COLORS.secondaryGrey}E6;
  border-radius: 0px 0px 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 24.5%;
    border-radius: 0px;
  }
`;

export const TitleAtomContainer = styled.div`
  text-align: center;
`;

export const CardTextContainer = styled.div`
  width: 50%;
  background-color: ${COLORS.secondaryGrey};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0px 15px 15px 0px;
  overflow: auto;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    height: 49.1%;
    border-radius: 0px 0px 15px 15px;
    overflow: auto;
  }
`;
export const CardTextBottomPart = styled.div`
  width: 100%;
  height: 90%;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${FIX_SPACING.max40};
  overflow: auto;
  padding: ${FIX_SPACING.max25} ${SPACING.max80};
`;

export const ButtonDiv = styled.div`
  background-color: ${COLORS.secondaryGrey};
  width: 100%;
  height: 5.8%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: ${SPACING.max40};
  border-radius: 15px 15px 0px 0px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: ${FIX_SPACING.max40};
  width: 8%;
  height: 45%;
  z-index: 100;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    margin-top: 0px;
  }
`;

export const ButtonImage = styled.img`
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 100%;
    width: 100%;
  }
`;
