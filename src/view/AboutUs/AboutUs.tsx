import { useState } from "react";

// STYLES
import * as Styled from "./AboutUsStyled";
import aboutOne from "assets/images/aboutOne.webp";
import aboutTwo from "assets/images/aboutTwo.webp";
import aboutThree from "assets/images/aboutThree.webp";
import aboutUsHero from "assets/cardImages/heroImages/aboutUsHero.webp";
import dropdownArrow from "assets/atomsAssets/dropdownArrow.svg";

// LIBRARIES
import { useNavigate } from "react-router-dom";

// MISC

// COMPONENTS
import HeroComponent from "components/CustomHeroComponent/CustomHeroComponent";
import TextAtom from "components/Atoms/CustomText/CustomText";
import CustomImageComponent from "components/CustomImagesComponent/CustomImageComponent";
import CustomCardComponent from "components/CustomCardComponent/CustomCardComponent";
import CustomOverlayCardComponent from "components/CustomOverlayCardComponent/CustomOverlayCardComponent";
import LeadershipCard from "components/LeadershipCard/LeadershipCard";
import AccordionAtom from "components/Atoms/CustomAccordion/CustomAccordion";
import ModalContent from "components/CustomModalContentComponent/CustomModalContentComponent";

import Modal from "@mui/material/Modal";
import CustomCarousel from "components/CustomCarousel/CustomCarousel";
import TitleAtom from "components/Atoms/CustomTitle/CustomTitle";
import CardCarousel from "components/CardCarousel/CardCarousel";
import { useCurrentDevice } from "hooks/useCurrentDevice";
import { useFormatMessage } from "hooks/useFormatMessage";
import {
  aboutUsAccordionData,
  cardsDataIndustries,
  cardsDataLeadership,
  desktopOurValuesCardList,
  mobileBestPartnerCarousel,
} from "mocks/aboutUsMockPage";
import { completedProjectsMock } from "mocks/completedProjectsMock";

const AboutUs = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const handleClose = (
    value: "backdropClick" | "escapeKeyDown" | "closeButtonClick"
  ) => {
    setOpen(false);
  };
  const handleModal = (boolean: boolean) => {
    setOpen(boolean);
  };

  const [isOpen, setIsOpen] = useState(-1);

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleLeaderShipModal = (index: number) => {
    handleModal(true);
    setCurrentModalIndex(index);
  };
  const handleAccordion = (id: number) => {
    // @ts-ignore
    setIsOpen((prevState) => (prevState === id ? null : id));
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const descriptionImages = [aboutOne, aboutTwo, aboutThree];

  const { currentDevice } = useCurrentDevice();

  return (
    <Styled.Container>
      <Styled.HeroContainer>
        <HeroComponent
          title={useFormatMessage("heroAboutPageTitle")}
          text={useFormatMessage("heroAboutPageText")}
          imgSrc={aboutUsHero}
        />
      </Styled.HeroContainer>

      <Styled.ContentContainer>
        <Styled.DescriptionContainer>
          <Styled.Wrapper width="35%">
            <TextAtom
              textStyle="paragraphDark"
              title={useFormatMessage("partnerAboutPageTitle")}
              text={useFormatMessage("partnerAboutPageText", { br: <br /> })}
            />
          </Styled.Wrapper>
          {currentDevice === "desktop" ? (
            <Styled.Wrapper width="55%">
              <CustomImageComponent lists={descriptionImages} />
            </Styled.Wrapper>
          ) : (
            <CardCarousel content={mobileBestPartnerCarousel} type="image" />
          )}
        </Styled.DescriptionContainer>

        <Styled.AboutOutValuesContainer>
          <TextAtom
            title={useFormatMessage("valuesAboutPageTitle")}
            textStyle="paragraphDark"
          />
          <Styled.AboutOutValuesCardsContainer>
            {currentDevice === "desktop" ? (
              desktopOurValuesCardList.map((card, index) => {
                return (
                  <Styled.CardWrapper key={`card--${index}`}>
                    <CustomCardComponent
                      textStyle="card"
                      title={card.title}
                      text={card.text}
                      source={card.source}
                    />
                  </Styled.CardWrapper>
                );
              })
            ) : (
              <CardCarousel content={desktopOurValuesCardList} type="card" />
            )}
          </Styled.AboutOutValuesCardsContainer>
        </Styled.AboutOutValuesContainer>

        <Styled.AboutOurIndustriesContainer>
          <Styled.OurIndustriesTextContainer>
            <TextAtom
              title={useFormatMessage("industriesAboutPageTitle")}
              textStyle="paragraphDark"
            />
            <TextAtom
              textStyle="paragraphDark"
              text={useFormatMessage("industriesAboutPageText")}
            />
          </Styled.OurIndustriesTextContainer>
          <Styled.OurIndustriesCardsContainer>
            {cardsDataIndustries.map((card, index) => {
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
            })}
          </Styled.OurIndustriesCardsContainer>
        </Styled.AboutOurIndustriesContainer>

        <Styled.AboutLeadershipContainer>
          <Styled.OurLeadershipTextContainer>
            <TextAtom
              title={useFormatMessage("leadershipTitle")}
              textStyle="paragraphLight"
            />
            <TextAtom
              textStyle="paragraphLight"
              text={useFormatMessage("leadershipText")}
            />
          </Styled.OurLeadershipTextContainer>
          <Styled.LeadershipListWrapper>
            {cardsDataLeadership.map((card, index) => {
              return (
                <Styled.LeadershipWrapper
                  key={`leadership-wrapper-${card.name}--${index}`}
                  onClick={() => handleLeaderShipModal(index)}
                >
                  <LeadershipCard
                    name={card.name}
                    status={card.status}
                    source={card.source}
                  />
                </Styled.LeadershipWrapper>
              );
            })}
          </Styled.LeadershipListWrapper>
        </Styled.AboutLeadershipContainer>

        <Styled.AboutFAQContainer>
          <Styled.AboutFAQTitleWrapper>
            <TextAtom
              title={useFormatMessage(
                currentDevice === "desktop"
                  ? "FAQTitleDesktop"
                  : "FAQTitleMobile"
              )}
              text={useFormatMessage("FAQText")}
              textStyle="faq"
            />
          </Styled.AboutFAQTitleWrapper>
          <Styled.AboutFAQListAccordionWrapper>
            {aboutUsAccordionData.map((accordion, index) => {
              return (
                <Styled.AboutFAQAccordionWrapper key={`accordion--${index}`}>
                  <AccordionAtom
                    title={accordion.title}
                    content={accordion.content}
                    dropdownArrow={dropdownArrow}
                    isOpen={isOpen === index}
                    handleToggle={() => handleAccordion(index)}
                  />
                </Styled.AboutFAQAccordionWrapper>
              );
            })}
          </Styled.AboutFAQListAccordionWrapper>
        </Styled.AboutFAQContainer>

        <Styled.AboutCompletedProjectsContainer>
          <TextAtom
            textStyle="paragraphDark"
            title={useFormatMessage("projectsAboutPageTitle")}
          />
          <Styled.AboutCompletedProjectsWrapper>
            {currentDevice === "desktop" ? (
              <CustomCarousel data={completedProjectsMock} />
            ) : (
              <CardCarousel content={completedProjectsMock} type="project" />
            )}
          </Styled.AboutCompletedProjectsWrapper>
        </Styled.AboutCompletedProjectsContainer>
      </Styled.ContentContainer>

      <Styled.AboutUsContainer>
        <Modal open={open} onClose={handleClose}>
          <Styled.ModalContainer>
            <ModalContent
              title={cardsDataLeadership[currentModalIndex].modalContent.name}
              image={cardsDataLeadership[currentModalIndex].modalContent.img}
              subtitle={
                cardsDataLeadership[currentModalIndex].modalContent.subtitle
              }
              text={cardsDataLeadership[currentModalIndex].modalContent.text}
              onClickCloseModal={() => handleModal(false)}
            />
          </Styled.ModalContainer>
        </Modal>
      </Styled.AboutUsContainer>
    </Styled.Container>
  );
};

export default AboutUs;
