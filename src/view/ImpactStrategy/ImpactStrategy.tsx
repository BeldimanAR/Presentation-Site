// STYLES
import * as Styled from "./ImpactStrategyStyled";

// LIBRARIES

// MISC

// COMPONENTS

import CustomCardComponent from "components/CustomCardComponent/CustomCardComponent";
import CustomOverlayCardComponent from "components/CustomOverlayCardComponent/CustomOverlayCardComponent";
import HeroComponent from "components/CustomHeroComponent/CustomHeroComponent";
import CustomCarousel from "components/CustomCarousel/CustomCarousel";
import TitleAtom from "components/Atoms/CustomTitle/CustomTitle";
import TextAtom from "components/Atoms/CustomText/CustomText";
import { useFormatMessage } from "hooks/useFormatMessage";
import CardCarousel from "components/CardCarousel/CardCarousel";
import { useCurrentDevice } from "hooks/useCurrentDevice";

import {
  desktopOurValuesCardList,
  desktopDifferencesCardList,
  mobileDifferencesCardList,
  completedProjectsList,
} from "mocks/impactStrategyMockPage";
import strategyHero from "assets/cardImages/heroImages/strategyHero.webp";
import { globalIntl } from "config/IntlGlobalProvider";
const ImpactStrategy = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const { currentDevice } = useCurrentDevice();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.ImpactStrategyContainer>
      <Styled.HeroContainer>
        <HeroComponent
          textStyle="hero"
          imgSrc={strategyHero}
          title={useFormatMessage("heroStrategyTitle")}
          text={useFormatMessage("heroStrategyText")}
        />
      </Styled.HeroContainer>

      <Styled.ContentContainer>
        <Styled.ValuesContainer>
          <TextAtom
            textStyle="paragraphDark"
            title={useFormatMessage("valuesStrategyTitle")}
          />

          <Styled.CardsContainer>
            {currentDevice === "desktop" ? (
              desktopOurValuesCardList?.map((item, index) => {
                return (
                  <Styled.CardWrapper>
                    <CustomCardComponent
                      title={item.title}
                      text={item.text}
                      source={item.source}
                      textStyle="card"
                      key={`card-data-${item.title}--${index}`}
                    />
                  </Styled.CardWrapper>
                );
              })
            ) : (
              <CardCarousel content={desktopOurValuesCardList} type="card" />
            )}
          </Styled.CardsContainer>
        </Styled.ValuesContainer>

        <Styled.DifferentContainer>
          <Styled.InfoContainer>
            <TextAtom
              textStyle="paragraphDark"
              title={useFormatMessage("differenceStrategyTitle")}
            />
            <TextAtom
              textStyle="paragraphDark"
              text={useFormatMessage("differenceStrategyText")}
            />
          </Styled.InfoContainer>
          <Styled.InfoCardsContainer>
            {currentDevice === "desktop" ? (
              desktopDifferencesCardList?.map((item) => {
                return (
                  <Styled.InfoCardWrapper>
                    <CustomOverlayCardComponent
                      image={item.source}
                      text={item.text}
                    />
                  </Styled.InfoCardWrapper>
                );
              })
            ) : (
              <CardCarousel
                content={mobileDifferencesCardList}
                type="project"
              />
            )}
          </Styled.InfoCardsContainer>
        </Styled.DifferentContainer>

        {completedProjectsList.length !== 0 && (
          <Styled.FundsContainer>
            <TextAtom
              textStyle="paragraphDark"
              title={globalIntl.formatMessage({ id: "projectsStrategyTitle" })}
            />

            <Styled.CarouselContainer>
              {currentDevice === "desktop" ? (
                <CustomCarousel data={completedProjectsList} />
              ) : (
                <CardCarousel content={completedProjectsList} type="project" />
              )}
            </Styled.CarouselContainer>
          </Styled.FundsContainer>
        )}
      </Styled.ContentContainer>
    </Styled.ImpactStrategyContainer>
  );
};

export default ImpactStrategy;
