import { globalIntl } from "config/IntlGlobalProvider";

import bridgeLoanFundsPreviewIcon from "assets/pages/bridgeLoanFundsPreviewIcon.webp";
import memrestorsPreviewIcon from "assets/pages/memrestorsPreviewIcon.webp";

export const investProjectsList = [
  {
    title: globalIntl.formatMessage({
      id: "projectsPageBridgeLoanProjectTitle",
    }),
    text: globalIntl.formatMessage({ id: "projectsPageBridgeLoanProjectText" }),
    source: bridgeLoanFundsPreviewIcon,
    path: "bridgeLoanFunds",
    isProject: true,
  },
  {
    title: globalIntl.formatMessage({
      id: "projectsPageMemrestorsProjectTitle",
    }),
    text: globalIntl.formatMessage({ id: "projectsPageMemrestorsProjectText" }),
    source: memrestorsPreviewIcon,
    path: "memristors",
    isProject: true,
  },
];
