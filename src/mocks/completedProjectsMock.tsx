import bridgeLoanHero from "assets/mocks/projects/bridgeLoanFunds/bridgeLoanHero.webp";
import memristorsHero from "assets/mocks/projects/memristors/memristorsHero.webp";
import { globalIntl } from "config/IntlGlobalProvider";

export const completedProjectsMock = [
  {
    title: globalIntl.formatMessage({ id: "bridgeLoanFundsCompleteProjTitle" }),
    text: globalIntl.formatMessage({ id: "bridgeLoanFundsCompleteProjText" }),
    source: bridgeLoanHero,
    path: "bridgeLoanFunds",
    isProject: true,
  },
  {
    title: globalIntl.formatMessage({ id: "memristorsCompleteProjTitle" }),
    text: globalIntl.formatMessage({ id: "memristorsCompleteProjText" }),
    source: memristorsHero,
    path: "memristors",
    isProject: true,
  },
];
