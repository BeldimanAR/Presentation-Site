import bridgeLoanHero from "assets/mocks/projects/bridgeLoanFunds/bridgeLoanHero.webp";
import memristorsHero from "assets/mocks/projects/memristors/memristorsHero.webp";
import { globalIntl } from "config/IntlGlobalProvider";

export const otherInterestedMock = [
  {
    title: globalIntl.formatMessage({
      id: "bridgeLoanFundsOtherInterestedProjTitle",
    }),
    text: globalIntl.formatMessage({
      id: "bridgeLoanFundsOtherInterestedProjText",
    }),
    source: bridgeLoanHero,
    path: "bridgeLoanFunds",
    isProject: true,
  },
  {
    title: globalIntl.formatMessage({
      id: "memristorsOtherInterestedProjTitle",
    }),
    text: globalIntl.formatMessage({ id: "memristorsOtherInterestedProjText" }),
    source: memristorsHero,
    path: "memristors",
    isProject: true,
  },
];
