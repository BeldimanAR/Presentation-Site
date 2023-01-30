// @ts-nocheck
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";

// STYLES
import * as Styled from "./ProjectComponentStyled";
import rightArrow from "../../assets/icons/rightArrow.svg";

// LIBRARIES

// MISC
import { projectMocks } from "mocks/projectsMock";

// COMPONENTS
import CustomHeroComponent from "components/CustomHeroComponent/CustomHeroComponent";
import CustomImageComponent from "components/CustomImagesComponent/CustomImageComponent";
import CustomCarousel from "components/CustomCarousel/CustomCarousel";
import TextAtom from "components/Atoms/CustomText/CustomText";
import AccordionAtom from "components/Atoms/CustomAccordion/CustomAccordion";
import dropdownArrow from "../../assets/atomsAssets/accordionArrow.svg";
import CustomProjectCard from "components/CustomProjectCard/CustomProjectCard";
import ProjectCarousel from "components/ProjectCarousel/ProjectCarousel";
import CardCarousel from "components/CardCarousel/CardCarousel";
import { useCurrentDevice } from "hooks/useCurrentDevice";
import ButtonAtom from "components/Atoms/CustomButton/CustomButton";
import ReadMoreButtonAtom from "components/Atoms/CustomReadMoreButton/CustomReadMoreButton";
import { useFormatMessage } from "hooks/useFormatMessage";
import { globalIntl } from "config/IntlGlobalProvider";
import { otherInterestedMock } from "mocks/otherInterestedMock";
import { futureProjectsMock } from "mocks/futureProjectsMock";
import { useNavigate } from "react-router-dom";
import { OtherCarouselWrapper } from "./ProjectComponentStyled";

const ProjectComponent = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const [currentUrl, setCurrentUrl] = useState("");
  const [readMore, setReadMore] = useState(false);
  const { currentDevice } = useCurrentDevice();

  // GENERAL CONSTANTS
  const currentText = readMore
    ? "detailsCloseBridgeLoan"
    : "detailsReadMoreBridgeLoan";

  // USE EFFECT FUNCTION
  useEffect(() => {
    setCurrentUrl(window.location.pathname.split("/project/")[1]);
  }, []);

  const [next, setNext] = useState(1);
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleAccordion = (id) => {
    setIsOpen((prevState) => (prevState === id ? null : id));
  };

  const handleReadMore = () => setReadMore(!readMore);

  const handleNavigateToProj = (path: string) => {
    navigate(`/project/${path}`);
    navigate(0);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 640 },
      items: 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 40,
    },

    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 40,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <Styled.ButtonsContainer>
        <Styled.CarouselTitle>
          <TextAtom
            textStyle="paragraphDark"
            title={projectMocks[currentUrl]?.carouselLabelOtherProjects}
          />
        </Styled.CarouselTitle>
        <Styled.ButtonsWrapper>
          <img
            src={rightArrow}
            style={{ transform: "rotate(180deg)" }}
            onClick={() => previous()}
          />
          <img src={rightArrow} onClick={() => next()} />
        </Styled.ButtonsWrapper>
      </Styled.ButtonsContainer>
    );
  };

  return (
    <Styled.Container>
      <Styled.HeroContainer>
        <CustomHeroComponent
          title={projectMocks[currentUrl]?.heroTitle}
          text={projectMocks[currentUrl]?.heroText}
          imgSrc={projectMocks[currentUrl]?.heroPic}
        />
      </Styled.HeroContainer>

      <Styled.ContentContainer>
        <Styled.DescriptionContainer>
          <Styled.Wrapper width="35%">
            <TextAtom
              textStyle="paragraphDark"
              title={projectMocks[currentUrl]?.infoTitle}
              text={projectMocks[currentUrl]?.infoText1}
            />

            <Styled.MoreTextContinaer isShown={readMore}>
              {projectMocks[currentUrl]?.infoText2}
            </Styled.MoreTextContinaer>
            <Styled.ImageButtonContainer>
              {currentDevice === "desktop" ? (
                <ReadMoreButtonAtom
                  text={globalIntl.formatMessage({ id: currentText })}
                  handleClick={handleReadMore}
                  buttonStyle="tertiary"
                />
              ) : (
                <ButtonAtom
                  buttonStyle="contactUs"
                  text={globalIntl.formatMessage({ id: currentText })}
                  handleClick={handleReadMore}
                />
              )}
            </Styled.ImageButtonContainer>
          </Styled.Wrapper>

          {currentDevice === "desktop" ? (
            <Styled.Wrapper width="55%">
              <CustomImageComponent
                lists={projectMocks[currentUrl]?.infoPics}
              />
            </Styled.Wrapper>
          ) : (
            <CardCarousel
              content={projectMocks[currentUrl]?.infoPicsMobile}
              type="image"
            />
          )}
        </Styled.DescriptionContainer>

        <Styled.InfoContainer>
          <Styled.Wrapper width="60%">
            <TextAtom
              textStyle="faq"
              title={useFormatMessage("faqTitleBridgeLoan")}
              text={projectMocks[currentUrl]?.heroTitle}
            />
          </Styled.Wrapper>
          <Styled.Wrapper width="40%">
            {projectMocks[currentUrl]?.accordionData.map((item, index) => {
              return (
                <Styled.Wrapper height={"fit-content"} key={index}>
                  <AccordionAtom
                    title={item.title}
                    content={item.content}
                    dropdownArrow={dropdownArrow}
                    isOpen={isOpen === index}
                    handleToggle={() => handleAccordion(index)}
                  />
                </Styled.Wrapper>
              );
            })}
          </Styled.Wrapper>
        </Styled.InfoContainer>

        {futureProjectsMock.length > 0 && (
          <Styled.CarouselContainer>
            <TextAtom
              textStyle="paragraphDark"
              title={projectMocks[currentUrl]?.carouselLabelFutureProjects}
            />

            <Styled.CarouselWrapper>
              {currentDevice === "desktop" ? (
                <CustomCarousel data={futureProjectsMock} />
              ) : (
                <CardCarousel content={futureProjectsMock} type="project" />
              )}
            </Styled.CarouselWrapper>
          </Styled.CarouselContainer>
        )}

        {otherInterestedMock.length > 0 && (
          <Styled.OtherCarouselContainer>
            <Styled.OtherCarouselWrapper>
              {currentDevice === "desktop" ? (
                <Carousel
                  partialVisible={true}
                  infinite={true}
                  responsive={responsive}
                  customButtonGroup={<ButtonGroup />}
                  renderButtonGroupOutside={true}
                  arrows={false}
                >
                  {otherInterestedMock.map((item, index) => {
                    return (
                      item.path !==
                        window.location.pathname.split("/")[
                          window.location.pathname.split("/").length - 1
                        ] && (
                        <Styled.CardWrapper
                          index={index}
                          key={`carousel-slide--${index}`}
                          onClick={() => handleNavigateToProj(item.path)}
                        >
                          <CustomProjectCard
                            title={item.title}
                            text={item.text}
                            source={item.source}
                            type="card"
                            path={item.path}
                            isFullWidth={true}
                          />
                        </Styled.CardWrapper>
                      )
                    );
                  })}
                </Carousel>
              ) : (
                <CardCarousel content={otherInterestedMock} type="project" />
              )}
            </Styled.OtherCarouselWrapper>
          </Styled.OtherCarouselContainer>
        )}
      </Styled.ContentContainer>
    </Styled.Container>
  );
};
export default ProjectComponent;
