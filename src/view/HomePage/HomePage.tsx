// @ts-nocheck
import React, { useRef, useState } from "react";

// STYLES
import * as Styled from "./HomePageStyled";
import homePageBg1 from "assets/pages/homePageBg1.webp";
import homePageBg2 from "assets/pages/homePageBg2.webp";
import homePageBg3 from "assets/pages/homePageBg3.webp";
import homePageBg4 from "assets/pages/homePageBg4.webp";
import homePageBgMobile1 from "assets/pages/HomePageMobile1.webp";
import homePageBgMobile2 from "assets/pages/HomePageMobile2.webp";
import homePageBgMobile3 from "assets/pages/HomePageMobile3.webp";
import homePageBgMobile4 from "assets/pages/HomePageMobile4.webp";

// LIBRARIES
// import { Parallax } from "react-parallax";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
// MISC
import { DEVICE_TYPE } from "constants/variables";
import { useCurrentDevice, windowSize } from "hooks/useCurrentDevice";

// COMPONENTS
import IconAtom from "components/Atoms/CustomIcon/CustomIcon";
import Header from "components/Header/Header";
import ButtonAtom from "components/Atoms/CustomButton/CustomButton";
import CustomOverlayCardComponent from "components/CustomOverlayCardComponent/CustomOverlayCardComponent";
import CustomCarousel from "components/CustomCarousel/CustomCarousel";
import CardCarousel from "components/CardCarousel/CardCarousel";
import ContactComponent from "components/ContactComponent/ContactComponent";
import Footer from "components/Footer/Footer";
import SideMenu from "components/SideMenu/SideMenu";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { investProjectsList } from "mocks/investMockPage";
import { cardsDataIndustries, social } from "mocks/homeMockPage";

const HomePage = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const { windowSize } = useCurrentDevice();
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const currentDevice =
    windowSize.width > 1279 ? DEVICE_TYPE.DESKTOP : DEVICE_TYPE.MOBILE;
  const [isOpen, setIsOpen] = useState(false);

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const parallaxStrength = 200;

  const SocialSideMenu = () => {
    return (
      <Styled.HomePageSideMenuContainer>
        <Styled.HomePageInvisibleLine />
        <Styled.HomePageButtonsContainer>
          {social?.map((item, index) => {
            return (
              <Styled.HomePageSocialButton>
                <IconAtom
                  iconSrc={item.icon}
                  redirectUrl={item.url}
                  key={`icon--${index}`}
                />
              </Styled.HomePageSocialButton>
            );
          })}
        </Styled.HomePageButtonsContainer>
        <Styled.HomePageLine />
      </Styled.HomePageSideMenuContainer>
    );
  };

  // const handleButtonPress = (btnType: string) => {
  //   if (btnType === "hero") {
  //     navigate("/about-us");
  //   }
  // };

  const [entered, setEntered] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <Styled.HomePageContainer>
      <Styled.HomePageSection
        style={{
          backgroundImage: `url(${
            windowSize.width > 800 ? homePageBg1 : homePageBgMobile1
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}
        <Styled.HomePageHeroText percentage={1}>
          <Styled.HeroTitle>
            <FormattedMessage id="heroHomeTitle" />
          </Styled.HeroTitle>
          <Styled.HeroText>
            <FormattedMessage id="heroHomeText" />
          </Styled.HeroText>

          <Styled.HeroBtnContainer>
            <ButtonAtom
              text={<FormattedMessage id="heroHomeButtonText" />}
              buttonStyle="contactUs"
              handleClick={() => handleNavigation("/about-us")}
            />
          </Styled.HeroBtnContainer>
        </Styled.HomePageHeroText>
        <Styled.SideMenuContainer isOpen={isOpen}>
          <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </Styled.SideMenuContainer>
      </Styled.HomePageSection>

      <Styled.HomePageSection
        style={{
          backgroundImage: `url(${
            windowSize.width > 800 ? homePageBg2 : homePageBgMobile2
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}
        <Styled.HomePageOurIndustriesContainer percentage={1}>
          <Styled.HomePageOurIndustriesWrapper percentage={1}>
            <Styled.HeroSubTitle>
              <FormattedMessage id="industriesHomeTitle" />
            </Styled.HeroSubTitle>
            <Styled.HeroSubText>
              <FormattedMessage id="industriesHomeText" />
            </Styled.HeroSubText>
          </Styled.HomePageOurIndustriesWrapper>

          <Styled.OurIndustriesCardsContainer percentage={1}>
            {currentDevice === "desktop" ? (
              cardsDataIndustries.map((card, index) => {
                return (
                  <Styled.OurIndustriesCardsWrapper
                    key={`industries-card-icon-${card.title}--${index}`}
                    onClick={() => handleNavigation(card.path)}
                  >
                    <CustomOverlayCardComponent
                      iconTitle={card.title}
                      icon={card.icon}
                      image={card.image}
                    />
                  </Styled.OurIndustriesCardsWrapper>
                );
              })
            ) : (
              <CardCarousel content={cardsDataIndustries} type="overlay" />
            )}
          </Styled.OurIndustriesCardsContainer>
        </Styled.HomePageOurIndustriesContainer>
      </Styled.HomePageSection>

      <Styled.HomePageSection
        style={{
          backgroundImage: `url(${
            windowSize.width > 800 ? homePageBg3 : homePageBgMobile3
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}

        <Styled.HomePageOurStrategy percentage={1}>
          <Styled.HeroSubTitle>
            <FormattedMessage id="strategyHomeTitle" />
          </Styled.HeroSubTitle>
          <Styled.HeroSubText>
            <FormattedMessage id="strategyHomeText" />
          </Styled.HeroSubText>

          <Styled.HeroBtnContainer>
            <ButtonAtom
              text={<FormattedMessage id="strategyHomeButtonText" />}
              buttonStyle="contactUs"
              handleClick={() => handleNavigation("/impact-strategy")}
            />
          </Styled.HeroBtnContainer>
        </Styled.HomePageOurStrategy>
      </Styled.HomePageSection>

      <Styled.HomePageFundsSection
        style={{
          backgroundImage: `url(${
            windowSize.width > 800 ? homePageBg4 : homePageBgMobile4
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}

        <Styled.HomePageOurFundsWrapper>
          <Styled.HomePageOurFunds percentage={1}>
            <Styled.HeroSubTitle>
              <FormattedMessage id="fundsHomeTitle" />
            </Styled.HeroSubTitle>
            <Styled.HeroSubText>
              <FormattedMessage id="fundsHomeText" />
            </Styled.HeroSubText>
            {currentDevice === DEVICE_TYPE.MOBILE && (
              <Styled.HomePageProjectMobileList>
                <CardCarousel content={investProjectsList} type="project" />
              </Styled.HomePageProjectMobileList>
            )}
            <Styled.BottomBtnContainer>
              <ButtonAtom
                text={<FormattedMessage id="fundsHomeButtonText" />}
                buttonStyle="contactUs"
                handleClick={() => handleNavigation("/projects")}
              />
            </Styled.BottomBtnContainer>
          </Styled.HomePageOurFunds>

          {currentDevice === DEVICE_TYPE.DESKTOP && (
            <Styled.HomePageProjectList percentage={1}>
              <Styled.HomePageProjectListWrapper>
                {currentDevice === "desktop" ? (
                  <CustomCarousel data={investProjectsList} />
                ) : (
                  <CardCarousel content={investProjectsList} type="project" />
                )}
              </Styled.HomePageProjectListWrapper>
            </Styled.HomePageProjectList>
          )}
        </Styled.HomePageOurFundsWrapper>
      </Styled.HomePageFundsSection>

      {/*<Parallax*/}
      {/*  bgImage={homePageBg1}*/}
      {/*  strength={parallaxStrength}*/}
      {/*  bgImageStyle={{*/}
      {/*    width: currentDevice === DEVICE_TYPE.DESKTOP ? "100vw" : "auto",*/}
      {/*    height: "100vh",*/}
      {/*  }}*/}
      {/*  bgClassName="parallax-wrapper"*/}
      {/*  renderLayer={(percentage) => {*/}
      {/*    return (*/}
      {/*      <Styled.HomePageSection>*/}
      {/*        <Header isOpen={isOpen} setIsOpen={setIsOpen} />*/}

      {/*        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}*/}
      {/*        <Styled.HomePageHeroText percentage={percentage}>*/}
      {/*          <Styled.HeroTitle>*/}
      {/*            <FormattedMessage id="heroHomeTitle" />*/}
      {/*          </Styled.HeroTitle>*/}
      {/*          <Styled.HeroText>*/}
      {/*            <FormattedMessage id="heroHomeText" />*/}
      {/*          </Styled.HeroText>*/}

      {/*          <Styled.HeroBtnContainer>*/}
      {/*            <ButtonAtom*/}
      {/*              text={<FormattedMessage id="heroHomeButtonText" />}*/}
      {/*              buttonStyle="contactUs"*/}
      {/*              handleClick={() => handleNavigation("/about-us")}*/}
      {/*            />*/}
      {/*          </Styled.HeroBtnContainer>*/}
      {/*        </Styled.HomePageHeroText>*/}
      {/*        <Styled.SideMenuContainer isOpen={isOpen}>*/}
      {/*          <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />*/}
      {/*        </Styled.SideMenuContainer>*/}
      {/*      </Styled.HomePageSection>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Parallax*/}
      {/*  bgImage={homePageBg2}*/}
      {/*  strength={parallaxStrength}*/}
      {/*  bgImageStyle={{*/}
      {/*    width: currentDevice === DEVICE_TYPE.DESKTOP ? "100vw" : "auto",*/}
      {/*    height: "100vh",*/}
      {/*  }}*/}
      {/*  renderLayer={(percentage) => {*/}
      {/*    return (*/}
      {/*      <Styled.HomePageSection>*/}
      {/*        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}*/}
      {/*        <Styled.HomePageOurIndustriesContainer percentage={percentage}>*/}
      {/*          <Styled.HomePageOurIndustriesWrapper percentage={percentage}>*/}
      {/*            <Styled.HeroSubTitle>*/}
      {/*              <FormattedMessage id="industriesHomeTitle" />*/}
      {/*            </Styled.HeroSubTitle>*/}
      {/*            <Styled.HeroSubText>*/}
      {/*              <FormattedMessage id="industriesHomeText" />*/}
      {/*            </Styled.HeroSubText>*/}
      {/*          </Styled.HomePageOurIndustriesWrapper>*/}

      {/*          <Styled.OurIndustriesCardsContainer percentage={percentage}>*/}
      {/*            {currentDevice === "desktop" ? (*/}
      {/*              cardsDataIndustries.map((card, index) => {*/}
      {/*                return (*/}
      {/*                  <Styled.OurIndustriesCardsWrapper*/}
      {/*                    key={`industries-card-icon-${card.title}--${index}`}*/}
      {/*                    onClick={() => handleNavigation(card.path)}*/}
      {/*                  >*/}
      {/*                    <CustomOverlayCardComponent*/}
      {/*                      iconTitle={card.title}*/}
      {/*                      icon={card.icon}*/}
      {/*                      image={card.image}*/}
      {/*                    />*/}
      {/*                  </Styled.OurIndustriesCardsWrapper>*/}
      {/*                );*/}
      {/*              })*/}
      {/*            ) : (*/}
      {/*              <CardCarousel*/}
      {/*                content={cardsDataIndustries}*/}
      {/*                type="overlay"*/}
      {/*              />*/}
      {/*            )}*/}
      {/*          </Styled.OurIndustriesCardsContainer>*/}
      {/*        </Styled.HomePageOurIndustriesContainer>*/}
      {/*      </Styled.HomePageSection>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Parallax*/}
      {/*  bgImage={homePageBg3}*/}
      {/*  strength={parallaxStrength}*/}
      {/*  bgImageStyle={{*/}
      {/*    width: currentDevice === DEVICE_TYPE.DESKTOP ? "100vw" : "auto",*/}
      {/*    height: "100vh",*/}
      {/*  }}*/}
      {/*  renderLayer={(percentage) => {*/}
      {/*    return (*/}
      {/*      <Styled.HomePageSection>*/}
      {/*        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}*/}
      {/*        <Styled.HomePageOurStrategy percentage={percentage}>*/}
      {/*          <Styled.HeroSubTitle>*/}
      {/*            <FormattedMessage id="strategyHomeTitle" />*/}
      {/*          </Styled.HeroSubTitle>*/}
      {/*          <Styled.HeroSubText>*/}
      {/*            <FormattedMessage id="strategyHomeText" />*/}
      {/*          </Styled.HeroSubText>*/}

      {/*          <Styled.HeroBtnContainer>*/}
      {/*            <ButtonAtom*/}
      {/*              text={<FormattedMessage id="strategyHomeButtonText" />}*/}
      {/*              buttonStyle="contactUs"*/}
      {/*              handleClick={() => handleNavigation("/impact-strategy")}*/}
      {/*            />*/}
      {/*          </Styled.HeroBtnContainer>*/}
      {/*        </Styled.HomePageOurStrategy>*/}
      {/*      </Styled.HomePageSection>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Parallax*/}
      {/*  bgImage={homePageBg4}*/}
      {/*  strength={parallaxStrength}*/}
      {/*  bgImageStyle={{*/}
      {/*    width: currentDevice === DEVICE_TYPE.DESKTOP ? "100vw" : "auto",*/}
      {/*    height: "100vh",*/}
      {/*  }}*/}
      {/*  renderLayer={(percentage) => {*/}
      {/*    return (*/}
      {/*      <Styled.HomePageSection>*/}
      {/*        {currentDevice === DEVICE_TYPE.DESKTOP && <SocialSideMenu />}*/}

      {/*        <Styled.HomePageOurFundsWrapper>*/}
      {/*          <Styled.HomePageOurFunds percentage={percentage}>*/}
      {/*            <Styled.HeroSubTitle>*/}
      {/*              <FormattedMessage id="fundsHomeTitle" />*/}
      {/*            </Styled.HeroSubTitle>*/}
      {/*            <Styled.HeroSubText>*/}
      {/*              <FormattedMessage id="fundsHomeText" />*/}
      {/*            </Styled.HeroSubText>*/}
      {/*            {currentDevice === DEVICE_TYPE.MOBILE && (*/}
      {/*              <Styled.HomePageProjectMobileList>*/}
      {/*                <CardCarousel content={fundsCardMock} type="project" />*/}
      {/*              </Styled.HomePageProjectMobileList>*/}
      {/*            )}*/}
      {/*            <Styled.HeroBtnContainer>*/}
      {/*              <ButtonAtom*/}
      {/*                text={<FormattedMessage id="fundsHomeButtonText" />}*/}
      {/*                buttonStyle="contactUs"*/}
      {/*                handleClick={() => handleNavigation("/bridge-loan-funds")}*/}
      {/*              />*/}
      {/*            </Styled.HeroBtnContainer>*/}
      {/*          </Styled.HomePageOurFunds>*/}

      {/*          {currentDevice === DEVICE_TYPE.DESKTOP && (*/}
      {/*            <Styled.HomePageProjectList percentage={percentage}>*/}
      {/*              <Styled.HomePageProjectListWrapper>*/}
      {/*                {currentDevice === "desktop" ? (*/}
      {/*                  <CustomCarousel data={fundsCardMock} />*/}
      {/*                ) : (*/}
      {/*                  <CardCarousel content={fundsCardMock} type="project" />*/}
      {/*                )}*/}
      {/*              </Styled.HomePageProjectListWrapper>*/}
      {/*            </Styled.HomePageProjectList>*/}
      {/*          )}*/}
      {/*        </Styled.HomePageOurFundsWrapper>*/}
      {/*      </Styled.HomePageSection>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*/>*/}

      <Styled.ContactWrapper>
        <ContactComponent />
      </Styled.ContactWrapper>
      <Styled.FooterWrapper>
        <Footer />
      </Styled.FooterWrapper>
    </Styled.HomePageContainer>
  );
};

export default HomePage;
