import bridgeLoanHero from "assets/mocks/projects/bridgeLoanFunds/bridgeLoanHero.webp";
import memristorsHero from "assets/mocks/projects/memristors/memristorsHero.webp";
import { globalIntl } from "config/IntlGlobalProvider";

export const futureProjectsMock = [
  {
    title: globalIntl.formatMessage({ id: "bridgeLoanFundsFutureProjTitle" }),
    text: globalIntl.formatMessage({ id: "bridgeLoanFundsFutureProjText" }),
    source: bridgeLoanHero,
    path: "bridgeLoanFunds",
    isProject: true,
  },
  {
    title: globalIntl.formatMessage({ id: "memristorsFutureProjTitle" }),
    text: globalIntl.formatMessage({ id: "memristorsFutureProjText" }),
    source: memristorsHero,
    path: "memristors",
    isProject: true,
  },
];
