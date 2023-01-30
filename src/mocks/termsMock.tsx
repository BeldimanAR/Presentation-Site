import { globalIntl } from "config/IntlGlobalProvider";

export const termsAccordionsMock = [
  {
    title: globalIntl.formatMessage({ id: "authorizedUsersTitle" }),
    content: globalIntl.formatMessage(
      { id: "authorizedUsers" },
      { br: <br /> }
    ),
  },
  {
    title: globalIntl.formatMessage({ id: "licenseToUseTitle" }),
    content: globalIntl.formatMessage({ id: "licenseToUse" }, { br: <br /> }),
  },
  {
    title: globalIntl.formatMessage({ id: "otherRestrictionsTitle" }),
    content: globalIntl.formatMessage(
      { id: "otherRestrictions" },
      { br: <br /> }
    ),
  },
  {
    title: globalIntl.formatMessage({ id: "copyrightsAndOtherTitle" }),
    content: globalIntl.formatMessage(
      { id: "copyrightsAndOther" },
      { br: <br /> }
    ),
  },
  {
    title: globalIntl.formatMessage({ id: "trademarksAndThirdTitle" }),
    content: globalIntl.formatMessage(
      { id: "trademarksAndThird" },
      { br: <br /> }
    ),
  },
  {
    title: globalIntl.formatMessage({ id: "privacyPolicyTitle" }),
    content: globalIntl.formatMessage({ id: "privacyPolicy" }, { br: <br /> }),
  },
  {
    title: globalIntl.formatMessage({ id: "submissionsInformationTitle" }),
    content: globalIntl.formatMessage(
      { id: "submissionsInformation" },
      { br: <br /> }
    ),
  },
  {
    title: globalIntl.formatMessage({ id: "term8Title" }),
    content: globalIntl.formatMessage({ id: "term8" }, { br: <br /> }),
  },
  {
    title: globalIntl.formatMessage({ id: "disclaimerTitle" }),
    content: globalIntl.formatMessage({ id: "disclaimer" }, { br: <br /> }),
  },
  {
    title: globalIntl.formatMessage({ id: "limitationLiabilityTitle" }),
    content: globalIntl.formatMessage(
      { id: "limitationLiability" },
      { br: <br /> }
    ),
  },
  {
    title: globalIntl.formatMessage({ id: "indemnityTitle" }),
    content: globalIntl.formatMessage({ id: "indemnity" }, { br: <br /> }),
  },
  {
    title: globalIntl.formatMessage({ id: "generalTermsTitle" }),
    content: globalIntl.formatMessage({ id: "generalTerms" }, { br: <br /> }),
  },
];
