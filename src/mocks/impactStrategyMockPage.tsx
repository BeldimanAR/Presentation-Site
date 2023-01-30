import { globalIntl } from "config/IntlGlobalProvider";
import { useFormatMessage } from "hooks/useFormatMessage";

// OUR VALUES
import ourValuesEntrepreneurship from "assets/mocks/aboutUs/ourValuesEntrepreneurship.png";
import ourValuesExcellence from "assets/mocks/aboutUs/ourValuesExcellence.png";
import ourValuesSustainability from "assets/mocks/aboutUs/ourValuesSustainability.png";
import ourValuesTransparency from "assets/mocks/aboutUs/ourValuesTransparency.png";
import differenceOne from "assets/mocks/impactStrategy/differenceOne.webp";
import differenceTwo from "assets/mocks/impactStrategy/differenceTwo.webp";
import differenceThree from "assets/mocks/impactStrategy/differenceThree.webp";
import differenceFour from "assets/mocks/impactStrategy/differenceFour.webp";
import differenceOneMobile from "assets/mocks/impactStrategy/differenceOneMobile.webp";
import differenceTwoMobile from "assets/mocks/impactStrategy/differenceTwoMobile.webp";
import differenceThreeMobile from "assets/mocks/impactStrategy/differenceThreeMobile.webp";
import differenceFourMobile from "assets/mocks/impactStrategy/differenceFourMobile.webp";
import homepageHero from "assets/cardImages/heroImages/homepageHero.png";

export const desktopOurValuesCardList = [
  {
    title: globalIntl.formatMessage({
      id: "entrepreneurshipStrategyCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "entrepreneurshipStrategyCardText" }),
    source: ourValuesEntrepreneurship,
  },
  {
    title: globalIntl.formatMessage({
      id: "excellenceStrategyCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "excellenceStrategyCardText" }),
    source: ourValuesExcellence,
  },
  {
    title: globalIntl.formatMessage({
      id: "transparencyStrategyCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "transparencyStrategyCardText" }),
    source: ourValuesTransparency,
  },
  {
    title: globalIntl.formatMessage({
      id: "sustainabilityStrategyCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "sustainabilityStrategyCardText" }),
    source: ourValuesSustainability,
  },
];

export const desktopDifferencesCardList = [
  {
    source: differenceOne,
    text: globalIntl.formatMessage({ id: "differenceStrategyFirstCardText" }),
  },
  {
    source: differenceTwo,
    text: globalIntl.formatMessage({ id: "differenceStrategySecondCardText" }),
  },
  {
    source: differenceThree,
    text: globalIntl.formatMessage({ id: "differenceStrategyThirdCardText" }),
  },
  {
    source: differenceFour,
    text: globalIntl.formatMessage({ id: "differenceStrategyFourthCardText" }),
  },
];
export const mobileDifferencesCardList = [
  {
    source: differenceOneMobile,
    text: globalIntl.formatMessage({ id: "differenceStrategyFirstCardText" }),
  },
  {
    source: differenceTwoMobile,
    text: globalIntl.formatMessage({ id: "differenceStrategySecondCardText" }),
  },
  {
    source: differenceThreeMobile,
    text: globalIntl.formatMessage({ id: "differenceStrategyThirdCardText" }),
  },
  {
    source: differenceFourMobile,
    text: globalIntl.formatMessage({ id: "differenceStrategyFourthCardText" }),
  },
];

export const completedProjectsList = [
  //   {
  //     title: globalIntl.formatMessage({ id: "firstStrategyProjectTitle" }),
  //     text: globalIntl.formatMessage({ id: "firstStrategyProjectTitle" }),
  //     source: homepageHero,
  //     type: "card",
  //   },
  //   {
  //     title: globalIntl.formatMessage({ id: "secondStrategyProjectTitle" }),
  //     text: globalIntl.formatMessage({ id: "secondStrategyProjectText" }),
  //     source: homepageHero,
  //     type: "card",
  //   },
  //   {
  //     title: globalIntl.formatMessage({ id: "thirdStrategyProjectTitle" }),
  //     text: globalIntl.formatMessage({ id: "thirdStrategyProjectText" }),
  //     source: homepageHero,
  //     type: "card",
  //   },
  //   {
  //     title: globalIntl.formatMessage({ id: "fourthStrategyProjectTitle" }),
  //     text: globalIntl.formatMessage({ id: "fourthStrategyProjectText" }),
  //     source: homepageHero,
  //     type: "card",
  //   },
];
