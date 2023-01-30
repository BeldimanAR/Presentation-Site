// LIBRARIES
import {
  COLORS,
  DEVICE_SIZE,
  FIX_SPACING,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "constants/variables";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  background-color: ${COLORS.backgroundColor};
`;
export const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${FIX_SPACING.max120} ${SPACING.max110} 0px;
  gap: ${FIX_SPACING.max60};
  background-color: transparent;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    gap: ${FIX_SPACING.max30};
    padding: ${FIX_SPACING.max60} ${FIX_SPACING.max10};
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0px ${FIX_SPACING.max55};
  }
`;
export const ProjectMappingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  gap: ${FIX_SPACING.max60} 2.3%;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const BottomPaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    justify-content: flex-start;
  }
`;
export const CardContainer = styled.div`
  width: 23.2%;
  height: 472px;

  div > div {
    p:first-of-type {
      font-size: ${FONT_SIZE.max20};
      font-weight: ${FONT_WEIGHT.bold};
      margin-bottom: 10px;
    }
  }

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    max-width: 600px;
    /* height: 723px; */
  }
`;

export const FundsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${FIX_SPACING.max120} 66px ${FIX_SPACING.max110};
  gap: ${FIX_SPACING.max60};
  background-color: transparent;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: ${FIX_SPACING.max60} 0 ${FIX_SPACING.max20};
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
