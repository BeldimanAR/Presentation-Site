// LIBRARIES
import {
  COLORS,
  DEVICE_SIZE,
  FIX_SPACING,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "constants/variables";
import styled, { css } from "styled-components";
import homePageBg1 from "assets/pages/homePageBg1.png";

export const HomePageContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
  overflow-x: hidden;
`;

export const HomePageSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
  }
`;
export const HomePageFundsSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
    height: auto;
  }
`;

export const HomePageHeroText = styled.div<{
  percentage?: number;
}>(
  ({ percentage = 0 }) => css`
    width: 40%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    height: 100%;
    gap: ${FIX_SPACING.max20};
    margin-left: ${70 * percentage}px;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      text-align: center;
      margin-left: 0;
      width: 100%;
      padding: 0px ${FIX_SPACING.max10};
      align-items: center;
    }
  `
);

export const HomePageOurIndustriesContainer = styled.div<{
  percentage?: number;
}>(
  ({ percentage = 0 }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 ${SPACING.max60};
    justify-content: center;
    gap: ${50 * percentage}px;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      align-items: center;
      gap: ${FIX_SPACING.max50};
      padding: 0;
    }
  `
);

export const HomePageOurIndustriesWrapper = styled.div<{
  percentage?: number;
}>(
  ({ percentage = 0 }) => css`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${FIX_SPACING.max20};
    opacity: ${percentage};
    margin-left: ${-70 + 70 * percentage}px;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      text-align: center;
      margin-left: 0;
      margin-top: ${-170 + 210 * percentage}px;
      width: 100%;
      align-items: center;
    }
  `
);

export const HeroTitle = styled.span`
  font-size: ${FONT_SIZE.fix60};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.bold};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* padding: ${FIX_SPACING.max120} 0 0; */
  }
`;
export const HeroSubTitle = styled.span`
  font-size: ${FONT_SIZE.max60v30};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.bold};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* padding: ${FIX_SPACING.max120} 0 0; */
  }
`;
export const HeroBigTitle = styled.span`
  font-size: ${FONT_SIZE.max60v30};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.bold};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* padding: ${FIX_SPACING.max120} 0 0; */
    font-size: 60px;
  }
`;
export const HeroText = styled.span`
  font-size: ${FONT_SIZE.max24v18};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0 10px;
  }
`;
export const HeroSubText = styled.span`
  font-size: ${FONT_SIZE.max24v12};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0 10px;
    font-weight: ${FONT_WEIGHT.regular};
  }
`;
export const HeroBigText = styled.span`
  font-size: ${FONT_SIZE.max24v12};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    font-size: 18px;
  }
`;
export const HeroBtnContainer = styled.div`
  font-size: ${FONT_SIZE.max24};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};

  width: 180px;
  height: 60px;

  cursor: pointer;
  z-index: 20;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 160px;
    height: 40px;
    margin-top: 90px;
  }
`;
export const BottomBtnContainer = styled.div`
  font-size: ${FONT_SIZE.max24};
  color: ${COLORS.backgroundColor};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};

  width: 180px;
  height: 60px;

  cursor: pointer;
  z-index: 20;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 160px;
    height: 40px;
    /* margin-top: 150px; */
  }
`;

export const HomePageSideMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  min-width: 80px;
  max-width: 100px;
  padding: ${FIX_SPACING.max100} 0;
`;

export const HomePageButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: end;
  height: 100%;

  gap: ${FIX_SPACING.max30};
`;
export const HomePageSocialButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePageLine = styled.div`
  height: 100%;
  width: 3px;
  background-color: ${COLORS.backgroundColor};
`;

export const HomePageInvisibleLine = styled.div`
  height: 100%;
  width: 3px;
  background-color: transparent;
`;

export const OurIndustriesCardsContainer = styled.div<{
  percentage?: number;
}>(
  ({ percentage = 0 }) => css`
    width: 95%;
    display: flex;
    overflow: auto;
    gap: ${20 * percentage}px;
    opacity: ${percentage};

    /* Designing for scroll-bar */
    &::-webkit-scrollbar {
      height: ${FIX_SPACING.max5};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${COLORS.backgroundColor};
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${COLORS.primaryBlack};

      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${COLORS.primaryDarkBlue};
      height: 5px;
    }

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      /* div > div > div {
        max-width: 68vw;
        max-height: 280px;
      } */
      div > div > img {
        max-height: 50%;
      }
    }
  `
);

export const OurIndustriesCardsWrapper = styled.div`
  min-width: 290px;

  min-height: 100px;
  max-height: 200px;
  cursor: pointer;
  div > img {
    height: 91px;
    margin-top: ${FIX_SPACING.max30};
  }

  div > p {
    margin-bottom: ${FIX_SPACING.max30};
  }
`;

export const HomePageOurStrategy = styled.div<{
  percentage?: number;
}>(
  ({ percentage = 0 }) => css`
    width: 40%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    height: 100%;
    gap: ${50 * percentage}px;
    opacity: ${percentage};
    padding-left: ${70 * percentage}px;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      text-align: center;
      padding-left: 0;
      margin-top: ${-170 + 210 * percentage}px;
      width: 90%;
      align-items: center;
    }
  `
);

export const HomePageOurFundsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
    margin-bottom: 100px;
  }
`;

export const HomePageOurFunds = styled.div<{
  percentage?: number;
}>(
  ({ percentage = 0 }) => css`
    width: 40%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    height: 100%;
    gap: ${50 * percentage}px;
    opacity: ${percentage};
    padding-left: ${70 * percentage}px;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      text-align: center;
      padding-left: 0;
      margin-top: ${-170 + 210 * percentage}px;
      width: 100%;
      align-items: center;
      padding-top: 100px;
    }
  `
);
export const HomePageProjectList = styled.div<{
  percentage?: number;
}>(
  ({ percentage = 0 }) => css`
    max-width: 40%;
    display: flex;
    align-items: center;
    height: 100%;
    gap: ${50 * percentage}px;
    opacity: ${percentage};
    padding-right: ${70 * percentage}px;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      text-align: center;
      padding-left: -${FIX_SPACING.max60};
      /* width: 90%; */
      align-items: center;
      /* padding: 0px; */
    }
  `
);

export const HomePageProjectMobileList = styled.div`
  height: 450px;
  width: 100%;

  //div > div > ul > li {
  //  min-width: 300px;
  //}
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 100%;
  }
`;

export const HomePageProjectListWrapper = styled.div`
  width: 100%;
  max-height: 540px;
  height: 400px;
  padding: 0 ${FIX_SPACING.max60};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 450px;
    padding: 0px;
    max-height: 440px;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;

  div {
    border-radius: 0;
  }
`;
export const FooterWrapper = styled.div`
  height: 290px;
  background-color: ${COLORS.primaryDarkBlue};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 400px;
  }
`;

export const SideMenuContainer = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    overflow: auto;
    background-color: ${COLORS.backgroundColor};
    visibility: ${isOpen ? "visible" : "hidden"};
    opacity: ${isOpen ? 1 : 0};
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    z-index: 21;
  `
);
