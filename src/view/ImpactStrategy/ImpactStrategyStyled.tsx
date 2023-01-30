// LIBRARIES
import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  FIX_SPACING,
  DEVICE_SIZE,
} from "constants/variables";

export const HeroContainer = styled.div`
  height: 448px;
`;
export const ImpactStrategyContainer = styled.div`
  background-color: ${COLORS.backgroundColor};
`;
export const ValuesContainer = styled.div`
  padding: ${FIX_SPACING.max120} ${FIX_SPACING.max110};
  display: flex;
  flex-direction: column;
  gap: ${FIX_SPACING.max60};
  background-color: transparent;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: ${FIX_SPACING.max60} 0px;
  }
`;

export const ContentContainer = styled.div``;

export const InfoText = styled.span`
  color: ${COLORS.primaryDarkBlue};
  font-size: ${FONT_SIZE.max30};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.regular};
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: ${FIX_SPACING.max60};
  width: 100%;
  height: 100%;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    gap: ${FIX_SPACING.max40};
    width: 100%;
    height: 100%;
  }
`;

export const CardWrapper = styled.div`
  width: 380px;
  height: 472px;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    min-width: 440px;
    height: 652px;
  }
`;

export const LineTitle = styled.div`
  width: 50%;
  height: 2px;
  background-color: ${COLORS.primaryDarkBlue};
`;

export const DifferentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: ${FIX_SPACING.max120} ${FIX_SPACING.max110};
  justify-content: space-between;
  box-shadow: 0px 5px 10px #0000001a;
  border-radius: 0px 0px 15px 15px;
  background-color: ${COLORS.secondaryGrey};
  z-index: 100;
  align-items: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: ${FIX_SPACING.max60} 0px;
    flex-direction: column;
    /* height: 1425px; */
    gap: 80px;
  }
`;

export const InfoContainer = styled.div`
  width: 30%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  gap: ${FIX_SPACING.max40};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0px ${FIX_SPACING.max20};
    width: 100%;
    gap: ${FIX_SPACING.max40};
  }
`;

export const InfoCardsContainer = styled.div`
  width: 800px;
  /* height: 400px; */
  gap: ${FIX_SPACING.max40};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const InfoCardWrapper = styled.div`
  height: 180px;
  width: 380px;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    min-width: 440px;
    height: 652px;
  }
`;

export const FundsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${FIX_SPACING.max120} 66px ${FIX_SPACING.max110};
  gap: ${FIX_SPACING.max60};
  background-color: transparent;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: ${FIX_SPACING.max60} 0px;
  }
`;

export const CarouselContainer = styled.div`
  height: 500px;
`;

export const ContactContainer = styled.div`
  margin-top: ${FIX_SPACING.max40};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 200px;
`;

export const ContactText = styled.span`
  width: 25%;
  color: ${COLORS.primaryDarkBlue};
  font-size: ${FONT_SIZE.max30};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.regular};
`;

export const ContactButtonWrapper = styled.div`
  width: 185px;
  height: 50px;
`;
