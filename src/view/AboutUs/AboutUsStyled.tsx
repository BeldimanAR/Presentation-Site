import styled, { css } from "styled-components";
import { COLORS, DEVICE_SIZE, FIX_SPACING, SPACING } from "constants/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.max80};
  &:first-child {
    gap: 0px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  height: 440px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.secondaryGrey};
  padding: ${SPACING.max110};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    gap: ${FIX_SPACING.max30};
    padding: ${FIX_SPACING.max55} 0 ${FIX_SPACING.max40};
  }
`;

export const Wrapper = styled.div<{ height?: string; width?: string }>(
  ({ width, height }) => css`
    width: ${width};
    ${height &&
    css`
      height: ${height};
    `}
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      height: 100%;
      padding: 0 ${FIX_SPACING.max10};

      div {
        display: flex;
        flex-direction: column;
        gap: ${FIX_SPACING.max20};
      }
    }
  `
);

export const AboutOutValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${FIX_SPACING.max120} ${SPACING.max110};
  /* margin: ${SPACING.max60} 0; */
  gap: ${FIX_SPACING.max60};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: ${FIX_SPACING.max60} 0 0;
    margin: 0;
    gap: ${FIX_SPACING.max30};
  }
`;

export const AboutOutValuesCardsContainer = styled.div`
  display: flex;
  max-height: 372px;
  height: 100%;
  max-height: 472px;
  gap: ${FIX_SPACING.max60};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* max-height: 550px; */
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 380px;

  /* min-height: 300px;
  max-height: 472px;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    min-height: 10px;
  } */
`;

export const AboutOurIndustriesContainer = styled.div`
  display: flex;
  padding: 0px ${SPACING.max110} ${FIX_SPACING.max120};
  gap: ${SPACING.max100};
  /* margin-bottom: ${SPACING.max60}; */
  justify-content: space-between;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${FIX_SPACING.max60} ${FIX_SPACING.max10} ${FIX_SPACING.max60};
    margin-bottom: 0;
    gap: ${FIX_SPACING.max40};
  }
`;

export const OurIndustriesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 19.5%;

  div {
    height: auto;
  }

  /* width: 100%; */
  /* max-width: 330px; */
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    padding: 0 ${FIX_SPACING.max10};
    gap: ${FIX_SPACING.max20};
  }
`;
export const OurLeadershipTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  justify-content: center;
  width: 19.5%;

  div {
    height: auto;
  }

  /* width: 100%; */
  /* max-width: 330px; */
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    padding: 0 ${FIX_SPACING.max10};
    /* gap: ${FIX_SPACING.max20}; */
  }
`;

export const OurIndustriesCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6% 2.3%;
  /* gap: ${FIX_SPACING.max30}; */

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* column-gap: 6.6%; */
    gap: ${FIX_SPACING.max40} 7.5%;
  }
`;

export const OurIndustriesCardsWrapper = styled.div`
  width: 23.27%;
  /* width: 290px; */
  min-height: 100px;
  max-height: 200px;
  cursor: pointer;

  div {
    border-radius: 8px;
  }

  div > img {
    height: 91px;
    margin-top: ${FIX_SPACING.max30};

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      /* column-gap: 6.6%; */
      height: 50px;
    }
  }

  div > p {
    margin-bottom: ${FIX_SPACING.max30};
  }

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 46%;
    max-width: 46%;
    min-height: 120px;
    height: 100%;
    max-height: 240px;
    border-radius: 8px;
  }
`;

export const AboutLeadershipContainer = styled.div`
  background-color: ${COLORS.primaryBlue};
  padding: ${FIX_SPACING.max120} 5.7%; // TODO ADD VARIABLES
  display: flex;
  width: 100%;
  /* min-height: 640px; */
  /* height: 100%; */
  height: 100%;
  gap: 5%;
  justify-content: space-between;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${FIX_SPACING.max40};
    padding: ${FIX_SPACING.max40} 0;
  }
`;

export const LeadershipListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 65%;
  /* width: 100%; */
  gap: 2.3%;
  /* @media (max-width: 1800px) {
    width: 50%;
  } */
  @media (max-width: 1400px) {
    width: 90%;
    /* gap: 0px; */
  }
  @media (max-width: 900px) {
    width: 100%;
    gap: 30px;
  }

  /* overflow-x: auto; */
  /* padding-bottom: ${FIX_SPACING.max15}; */
  /* overflow: hidden; */
  /* Designing for scroll-bar */
  &::-webkit-scrollbar {
    /* height: ${FIX_SPACING.max5}; */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* background: ${COLORS.backgroundColor}; */
    /* border-radius: 5px; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: ${COLORS.primaryDarkBlue}; */
    /* border-radius: 5px; */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /* background: ${COLORS.primaryDarkBlue}; */
    /* height: 5px; */
  }
`;
export const LeadershipWrapper = styled.div`
  /* min-width: 250px;
  width: 100%; */
  width: 23%;
  /* height: 400px; */
  aspect-ratio: 0.7;

  @media (max-width: 1100px) {
    /* width: 33%; */
    /* aspect-ratio: auto; */
    /* height: 595px; */
  }
  @media (max-width: 900px) {
    width: 93%;
    aspect-ratio: auto;
    height: 595px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const AboutFAQContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.secondaryGrey};
  padding: ${SPACING.max110};

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    gap: ${FIX_SPACING.max40};
    padding: ${FIX_SPACING.max40} ${FIX_SPACING.max10};
  }
`;

export const AboutFAQTitleWrapper = styled.div`
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${FIX_SPACING.max70};
    gap: ${FIX_SPACING.max10};
  }
`;

export const AboutFAQListAccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
  }
`;
export const AboutFAQAccordionWrapper = styled.div``;

export const AboutCompletedProjectsContainer = styled.div`
  padding: ${FIX_SPACING.max120} ${SPACING.max110};
  display: flex;
  flex-direction: column;
  gap: ${SPACING.max60};
  background-color: transparent;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    gap: ${FIX_SPACING.max40};
    padding: ${FIX_SPACING.max60} 0;
  }
`;

export const AboutCompletedProjectsWrapper = styled.div`
  height: 450px;
`;

export const AboutUsContainer = styled.div``;
export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  /* height: 300px; */
`;
