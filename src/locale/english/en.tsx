import { aboutUsPageLocale } from "./mainPages/aboutUsPageLocale";
import { contactComponentLocale } from "./components/contactComponentLocale";
import { contactPageLocale } from "./mainPages/contactPageLocale";
import { homePageLocale } from "./mainPages/homePageLocale";
import { strategyPageLocale } from "./mainPages/strategyPageLocale";
import { footerComponentLocale } from "./components/footerComponentLocale";
import { headerComponentLocale } from "./components/headerComponentLocale";
import { sideMenuComponentLocale } from "./components/sideMenuComponentLocale";
import { pharmaPageLocale } from "./industries/pharmaPageLocale";
import { agriculturePageLocale } from "./industries/agriculturePageLocale";
import { realEstatePageLocale } from "./industries/realEstatePageLocale";
import { greenEnergyPageLocale } from "./industries/greenEnergyPageLocale";
import { portOperatorPageLocale } from "./industries/portOperatorPageLocale";
import { refineryPageLocale } from "./industries/refineryPageLocale";
import { informationTechnologyPageLocale } from "./industries/informationTechnologyPageLocale";
import { factoryPageLocale } from "./industries/factoryPageLocale";
import { projectsPageLocale } from "./mainPages/projectsPageLocale";
import { bridgeLoanFundsProjectLocale } from "./projects/bridgeLoanFundsProjectLocale";
import { memristorsLocale } from "./projects/memristorsLocale";
import { completedProjectsLocale } from "./components/completedProjectsLocale";
import { otherInterestedProjectsLocale } from "./components/otherInterestedProjectsLocale";
import { futureProjectsLocale } from "./components/futureProjectsLocale";
import { termsLocale } from "./mainPages/termsLocale";

export const en = {
  // main pages
  ...homePageLocale,
  ...projectsPageLocale,
  ...strategyPageLocale,
  ...aboutUsPageLocale,
  ...contactPageLocale,
  ...termsLocale,

  // industries pages
  ...agriculturePageLocale,
  ...realEstatePageLocale,
  ...greenEnergyPageLocale,
  ...pharmaPageLocale,
  ...portOperatorPageLocale,
  ...refineryPageLocale,
  ...informationTechnologyPageLocale,
  ...factoryPageLocale,

  // components
  ...contactComponentLocale,
  ...footerComponentLocale,
  ...headerComponentLocale,
  ...sideMenuComponentLocale,
  ...completedProjectsLocale,
  ...otherInterestedProjectsLocale,
  ...futureProjectsLocale,

  // projects
  ...bridgeLoanFundsProjectLocale,
  ...memristorsLocale,
};
