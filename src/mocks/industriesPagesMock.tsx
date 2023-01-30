import agricultureHero from "assets/cardImages/heroImages/agricultureHero.webp";
import pharmaHero from "assets/cardImages/heroImages/pharmaHero.webp";
import realHero from "assets/cardImages/heroImages/realHero.webp";
import greenHero from "assets/cardImages/heroImages/greenHero.webp";
import portHero from "assets/cardImages/heroImages/portHero.webp";
import refineryHero from "assets/cardImages/heroImages/refineryHero.webp";
import informationHero from "assets/cardImages/heroImages/informationHero.webp";
import factoryHero from "assets/cardImages/heroImages/factoryHero.webp";
import pharmaOne from "assets/images/pharmaOne.webp";
import pharmaTwo from "assets/images/pharmaTwo.webp";
import pharmaThree from "assets/images/pharmaThree.webp";
import agricultureOne from "assets/images/agricultureOne.webp";
import agricultureTwo from "assets/images/agricultureTwo.webp";
import agricultureThree from "assets/images/agricultureThree.webp";
import realOne from "assets/images/realOne.webp";
import realTwo from "assets/images/realTwo.webp";
import realThree from "assets/images/realThree.webp";
import greenOne from "assets/images/greenOne.webp";
import greenTwo from "assets/images/greenTwo.webp";
import greenThree from "assets/images/greenThree.webp";
import portOne from "assets/images/portOne.webp";
import portTwo from "assets/images/portTwo.webp";
import portThree from "assets/images/portThree.webp";
import refineryOne from "assets/images/refineryOne.webp";
import refineryTwo from "assets/images/refineryTwo.webp";
import refineryThree from "assets/images/refineryThree.webp";
import informationOne from "assets/images/informationOne.webp";
import informationTwo from "assets/images/informationTwo.webp";
import informationThree from "assets/images/informationThree.webp";
import factoryOne from "assets/images/factoryOne.webp";
import factoryTwo from "assets/images/factoryTwo.webp";
import factoryThree from "assets/images/factoryThree.webp";
import { globalIntl } from "config/IntlGlobalProvider";

export const industriesPagesMock = {
  agriculture: {
    heroTitle: "heroAgricultureTitle",
    heroText: "heroAgricultureText",
    heroPic: agricultureHero,
    infoTitle: "infoAgricultureTitle",
    infoText: "infoAgricultureText",
    infoPics: [agricultureOne, agricultureTwo, agricultureThree],
    infoPicsObject: [
      {
        id: 1,
        source: agricultureOne,
      },
      {
        id: 2,

        source: agricultureTwo,
      },
      {
        id: 3,

        source: agricultureThree,
      },
    ],
    carouselLabel: "fundsAgricultureTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({ id: "firstAgricultureFundTitle" }),
      //   text: globalIntl.formatMessage({ id: "firstAgricultureFundText" }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsAgricultureTitle",
    progressText: "progressAgricultureText",
    accordionData: [
      { title: "firstAgricultureLabelText" },
      { title: "secondAgricultureLabelText" },
      { title: "thirdAgricultureLabelText" },
      { title: "fourthAgricultureLabelText" },
      { title: "fifthAgricultureLabelText" },
      { title: "sixthAgricultureLabelText" },
    ],
  },
  pharma: {
    heroTitle: "heroPharmaTitle",
    heroText: "heroPharmaText",
    heroPic: pharmaHero,
    infoTitle: "infoPharmaTitle",
    infoText: "infoPharmaText",
    infoPics: [pharmaOne, pharmaTwo, pharmaThree],
    infoPicsObject: [
      {
        id: 1,
        source: pharmaOne,
      },
      {
        id: 2,

        source: pharmaTwo,
      },
      {
        id: 3,

        source: pharmaThree,
      },
    ],
    carouselLabel: "fundsPharmaTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({ id: "firstPharmaFundTitle" }),
      //   text: globalIntl.formatMessage({ id: "firstPharmaFundText" }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsPharmaTitle",
    progressText: "progressPharmaText",
    accordionData: [
      { title: "firstPharmaLabelText" },
      { title: "secondPharmaLabelText" },
      { title: "thirdPharmaLabelText" },
      { title: "fourthPharmaLabelText" },
      { title: "fifthPharmaLabelText" },
      { title: "sixthPharmaLabelText" },
    ],
  },
  real: {
    heroTitle: "heroRealEstateTitle",
    heroText: "heroRealEstateText",
    heroPic: realHero,
    infoTitle: "infoRealEstateTitle",
    infoText: "infoRealEstateText",
    infoPics: [realOne, realTwo, realThree],
    infoPicsObject: [
      {
        id: 1,
        source: realOne,
      },
      {
        id: 2,

        source: realTwo,
      },
      {
        id: 3,

        source: realThree,
      },
    ],
    carouselLabel: "fundsRealEstateTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({ id: "firstRealEstateFundTitle" }),
      //   text: globalIntl.formatMessage({ id: "firstRealEstateFundText" }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsRealEstateTitle",
    progressText: "progressRealEstateText",
    accordionData: [
      { title: "firstRealEstateLabelText" },
      { title: "secondRealEstateLabelText" },
      { title: "thirdRealEstateLabelText" },
      { title: "fourthRealEstateLabelText" },
      { title: "fifthRealEstateLabelText" },
      { title: "sixthRealEstateLabelText" },
    ],
  },
  green: {
    heroTitle: "heroGreenEnergyTitle",
    heroText: "heroGreenEnergyText",
    heroPic: greenHero,
    infoTitle: "infoGreenEnergyTitle",
    infoText: "infoGreenEnergyText",
    infoPics: [greenOne, greenTwo, greenThree],
    infoPicsObject: [
      {
        id: 1,
        source: greenOne,
      },
      {
        id: 2,

        source: greenTwo,
      },
      {
        id: 3,

        source: greenThree,
      },
    ],
    carouselLabel: "fundsGreenEnergyTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({ id: "firstGreenEnergyFundTitle" }),
      //   text: globalIntl.formatMessage({ id: "firstGreenEnergyFundText" }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsGreenEnergyTitle",
    progressText: "progressGreenEnergyText",
    accordionData: [
      { title: "firstGreenEnergyLabelText" },
      { title: "secondGreenEnergyLabelText" },
      { title: "thirdGreenEnergyLabelText" },
      { title: "fourthGreenEnergyLabelText" },
      { title: "fifthGreenEnergyLabelText" },
      { title: "sixthGreenEnergyLabelText" },
    ],
  },
  port: {
    heroTitle: "heroPortOperatorTitle",
    heroText: "heroPortOperatorText",
    heroPic: portHero,
    infoTitle: "infoPortOperatorTitle",
    infoText: "infoPortOperatorText",
    infoPics: [portOne, portTwo, portThree],
    infoPicsObject: [
      {
        id: 1,
        source: portOne,
      },
      {
        id: 2,

        source: portTwo,
      },
      {
        id: 3,

        source: portThree,
      },
    ],
    carouselLabel: "fundsPortOperatorTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({ id: "firstPortOperatorFundTitle" }),
      //   text: globalIntl.formatMessage({ id: "firstPortOperatorFundText" }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsPortOperatorTitle",
    progressText: "progressPortOperatorText",
    accordionData: [
      { title: "firstPortOperatorLabelText" },
      { title: "secondPortOperatorLabelText" },
      { title: "thirdPortOperatorLabelText" },
      { title: "fourthPortOperatorLabelText" },
      { title: "fifthPortOperatorLabelText" },
      { title: "sixthPortOperatorLabelText" },
    ],
  },
  refinery: {
    heroTitle: "heroRefineryTitle",
    heroText: "heroRefineryText",
    heroPic: refineryHero,
    infoTitle: "infoRefineryTitle",
    infoText: "infoRefineryText",
    infoPics: [refineryOne, refineryTwo, refineryThree],
    infoPicsObject: [
      {
        id: 1,
        source: refineryOne,
      },
      {
        id: 2,

        source: refineryTwo,
      },
      {
        id: 3,

        source: refineryThree,
      },
    ],
    carouselLabel: "fundsRefineryTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({ id: "firstRefineryFundTitle" }),
      //   text: globalIntl.formatMessage({ id: "firstRefineryFundText" }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsRefineryTitle",
    progressText: "progressRefineryText",
    accordionData: [
      { title: "firstRefineryLabelText" },
      { title: "secondRefineryLabelText" },
      { title: "thirdRefineryLabelText" },
      { title: "fourthRefineryLabelText" },
      { title: "fifthRefineryLabelText" },
      { title: "sixthRefineryLabelText" },
    ],
  },
  information: {
    heroTitle: "heroInformationTechnologyTitle",
    heroText: "heroInformationTechnologyText",
    heroPic: informationHero,
    infoTitle: "infoInformationTechnologyTitle",
    infoText: "infoInformationTechnologyText",
    infoPics: [informationOne, informationTwo, informationThree],
    infoPicsObject: [
      {
        id: 1,
        source: informationOne,
      },
      {
        id: 2,

        source: informationTwo,
      },
      {
        id: 3,

        source: informationThree,
      },
    ],
    carouselLabel: "fundsInformationTechnologyTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({
      //     id: "firstInformationTechnologyFundTitle",
      //   }),
      //   text: globalIntl.formatMessage({
      //     id: "firstInformationTechnologyFundText",
      //   }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsInformationTechnologyTitle",
    progressText: "progressInformationTechnologyText",
    accordionData: [
      { title: "firstInformationTechnologyLabelText" },
      { title: "secondInformationTechnologyLabelText" },
      { title: "thirdInformationTechnologyLabelText" },
      { title: "fourthInformationTechnologyLabelText" },
      { title: "fifthInformationTechnologyLabelText" },
      { title: "sixthInformationTechnologyLabelText" },
    ],
  },
  factory: {
    heroTitle: "heroFactoryTitle",
    heroText: "heroFactoryText",
    heroPic: factoryHero,
    infoTitle: "infoFactoryTitle",
    infoText: "infoFactoryText",
    infoPics: [factoryOne, factoryTwo, factoryThree],
    infoPicsObject: [
      {
        id: 1,
        source: factoryOne,
      },
      {
        id: 2,

        source: factoryTwo,
      },
      {
        id: 3,

        source: factoryThree,
      },
    ],
    carouselLabel: "fundsFactoryTitle",
    carouselPics: [
      // {
      //   title: globalIntl.formatMessage({ id: "firstFactoryFundTitle" }),
      //   text: globalIntl.formatMessage({ id: "firstFactoryFundText" }),
      //   source: agricultureHero,
      //   path: "bridgeLoanFunds",
      // },
    ],
    goalsTitle: "goalsFactoryTitle",
    progressText: "progressFactoryText",
    accordionData: [
      { title: "firstFactoryLabelText" },
      { title: "secondFactoryLabelText" },
      { title: "thirdFactoryLabelText" },
      { title: "fourthFactoryLabelText" },
      { title: "fifthFactoryLabelText" },
      { title: "sixthFactoryLabelText" },
    ],
  },
};
