// @ts-nocheck
import { useState, useEffect } from "react";

// STYLES
import * as Styled from "./PageComponentStyled";

// LIBRARIES

// MISC
import { industriesPagesMock } from "mocks/industriesPagesMock";

// COMPONENTS
import CustomHeroComponent from "components/CustomHeroComponent/CustomHeroComponent";
import CustomImageComponent from "components/CustomImagesComponent/CustomImageComponent";
import CustomCarousel from "components/CustomCarousel/CustomCarousel";
import TextAtom from "components/Atoms/CustomText/CustomText";
import ProgressBar from "components/CustomProgressBar/CustomProgressBar";
import LabelAtom from "components/Atoms/CustomLabel/CustomLabel";
import CardCarousel from "components/CardCarousel/CardCarousel";
import { useFormatMessage } from "hooks/useFormatMessage";
import { FormattedMessage } from "react-intl";
import { useCurrentDevice } from "hooks/useCurrentDevice";
import { globalIntl } from "config/IntlGlobalProvider";

const PageComponent = () => {
  // PROPS
  const { currentDevice } = useCurrentDevice();
  // CONSTANTS USING LIBRARIES
  console.log(window.innerWidth);
  // CONSTANTS USING HOOKS
  const [currentUrl, setCurrentUrl] = useState("");
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    if (window.location.pathname.split("/")[1].includes("-")) {
      setCurrentUrl(window.location.pathname.split("/")[1].split("-")[0]);
    } else {
      setCurrentUrl(window.location.pathname.split("/")[1]);
    }
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.Container>
      <Styled.HeroContainer>
        <CustomHeroComponent
          title={useFormatMessage(
            `${industriesPagesMock[currentUrl]?.heroTitle}`
          )}
          text={useFormatMessage(
            `${industriesPagesMock[currentUrl]?.heroText}`
          )}
          imgSrc={industriesPagesMock[currentUrl]?.heroPic}
        />
      </Styled.HeroContainer>
      <Styled.ContentContainer>
        <Styled.DescriptionContainer>
          <Styled.Wrapper width="35%">
            <TextAtom
              textStyle="paragraphDark"
              title={useFormatMessage(
                `${industriesPagesMock[currentUrl]?.infoTitle}`
              )}
              text={useFormatMessage(
                `${industriesPagesMock[currentUrl]?.infoText}`
              )}
            />
          </Styled.Wrapper>
          {currentDevice === "desktop" ? (
            <Styled.Wrapper width="55%">
              <CustomImageComponent
                lists={industriesPagesMock[currentUrl]?.infoPics}
              />
            </Styled.Wrapper>
          ) : (
            <CardCarousel
              content={industriesPagesMock[currentUrl]?.infoPicsObject}
              type="image"
            />
          )}
        </Styled.DescriptionContainer>

        <Styled.InfoContainer>
          <Styled.ProgressContainer>
            <Styled.CarouselTitle>
              {useFormatMessage(
                `${industriesPagesMock[currentUrl]?.goalsTitle}`
              )}
            </Styled.CarouselTitle>
            <Styled.Wrapper height="350px">
              <ProgressBar
                value={45}
                text={useFormatMessage(
                  `${industriesPagesMock[currentUrl]?.progressText}`
                )}
              />
            </Styled.Wrapper>
          </Styled.ProgressContainer>

          <Styled.Wrapper width="50%">
            {industriesPagesMock[currentUrl]?.accordionData.map(
              (item, index) => {
                return (
                  <Styled.Wrapper height={"fit-content"} key={index}>
                    <LabelAtom
                      text={<FormattedMessage id={item.title} />}
                      number={index}
                    />
                  </Styled.Wrapper>
                );
              }
            )}
          </Styled.Wrapper>
        </Styled.InfoContainer>
        {industriesPagesMock[currentUrl]?.carouselPics.length > 0 && (
          <Styled.CarouselContainer>
            <Styled.CarouselTitle>
              {globalIntl.formatMessage({
                id: industriesPagesMock[currentUrl]?.carouselLabel,
              })}
            </Styled.CarouselTitle>

            {currentDevice === "desktop" ? (
              <Styled.CarouselWrapper>
                <CustomCarousel
                  data={industriesPagesMock[currentUrl]?.carouselPics}
                />
              </Styled.CarouselWrapper>
            ) : (
              <CardCarousel
                content={industriesPagesMock[currentUrl]?.carouselPics}
                type="project"
              />
            )}
          </Styled.CarouselContainer>
        )}
      </Styled.ContentContainer>
    </Styled.Container>
  );
};
export default PageComponent;
