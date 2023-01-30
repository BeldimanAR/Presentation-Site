// BRIDGE LOAN FUNDS
import bridgeLoanHero from "assets/mocks/projects/bridgeLoanFunds/bridgeLoanHero.webp";
import bridgeLoanInvest1 from "assets/mocks/projects/bridgeLoanFunds/bridgeLoanInvest1.webp";
import bridgeLoanInvest2 from "assets/mocks/projects/bridgeLoanFunds/bridgeLoanInvest2.webp";
import bridgeLoanInvest3 from "assets/mocks/projects/bridgeLoanFunds/bridgeLoanInvest3.webp";

// memristors
import memristorsHero from "assets/mocks/projects/memristors/memristorsHero.webp";
import memristorsInvest1 from "assets/mocks/projects/memristors/memristorsInvest1.webp";
import memristorsInvest2 from "assets/mocks/projects/memristors/memristorsInvest2.webp";
import memristorsInvest3 from "assets/mocks/projects/memristors/memristorsInvest3.webp";

import { globalIntl } from "config/IntlGlobalProvider";

export const projectMocks = {
  bridgeLoanFunds: {
    heroTitle: globalIntl.formatMessage({ id: "heroBridgeLoanTitle" }),
    heroText: globalIntl.formatMessage({ id: "heroBridgeLoanText" }),

    heroPic: bridgeLoanHero,
    infoTitle: globalIntl.formatMessage({ id: "infoBridgeLoanTitle" }),
    infoText1: globalIntl.formatMessage({ id: "infoBridgeLoanText1" }),
    infoText2: globalIntl.formatMessage({ id: "infoBridgeLoanText2" }),

    infoPics: [bridgeLoanInvest1, bridgeLoanInvest2, bridgeLoanInvest3],
    infoPicsMobile: [
      {
        id: 1,

        source: bridgeLoanInvest1,
      },
      {
        id: 2,

        source: bridgeLoanInvest2,
      },
      {
        id: 3,

        source: bridgeLoanInvest3,
      },
    ],
    accordionData: [
      {
        title: globalIntl.formatMessage({ id: "faqBridgeLoanQuestion1Title" }),
        content: "",
      },
      {
        title: globalIntl.formatMessage({ id: "faqBridgeLoanQuestion2Title" }),
        content: "",
      },
      {
        title: globalIntl.formatMessage({ id: "faqBridgeLoanQuestion3Title" }),
        content: "",
      },
      {
        title: globalIntl.formatMessage({ id: "faqBridgeLoanQuestion4Title" }),
        content: "",
      },
    ],
    carouselLabelFutureProjects: globalIntl.formatMessage({
      id: "carouselBridgeLoanFutureProj",
    }),
    carouselLabelOtherProjects: globalIntl.formatMessage({
      id: "carouselBridgeLoanOtherProj",
    }),
  },
  memristors: {
    heroTitle: globalIntl.formatMessage({ id: "heroMemristorsTitle" }),
    heroText: globalIntl.formatMessage({ id: "heroMemristorsText" }),

    heroPic: memristorsHero,
    infoTitle: globalIntl.formatMessage({ id: "infoMemristorsTitle" }),
    infoText1: globalIntl.formatMessage(
      { id: "infoMemristorsText1" },
      { br: <br /> }
    ),
    infoText2: globalIntl.formatMessage(
      { id: "infoMemristorsText2" },
      { br: <br /> }
    ),

    infoPics: [memristorsInvest1, memristorsInvest2, memristorsInvest3],
    infoPicsMobile: [
      {
        id: 1,

        source: memristorsInvest1,
      },
      {
        id: 2,

        source: memristorsInvest2,
      },
      {
        id: 3,

        source: memristorsInvest3,
      },
    ],
    accordionData: [
      {
        title: globalIntl.formatMessage({ id: "faqMemristorsQuestion1Title" }),
        content: "",
      },
      {
        title: globalIntl.formatMessage({ id: "faqMemristorsQuestion2Title" }),
        content: "",
      },
      {
        title: globalIntl.formatMessage({ id: "faqMemristorsQuestion3Title" }),
        content: "",
      },
      {
        title: globalIntl.formatMessage({ id: "faqMemristorsQuestion4Title" }),
        content: "",
      },
    ],
    carouselLabelFutureProjects: globalIntl.formatMessage({
      id: "carouselMemristorsFutureProj",
    }),
    carouselLabelOtherProjects: globalIntl.formatMessage({
      id: "carouselMemristorsOtherProj",
    }),
  },
};
