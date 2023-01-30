import aboutOne from "assets/images/aboutOne.jpg";
import { globalIntl } from "config/IntlGlobalProvider";

import pic from "assets/cardImages/heroImages/homepageHero.png";

// BEST PARTNER - MOBILE
import bestPartner1 from "assets/mocks/aboutUs/bestPartner1.webp";
import bestPartner2 from "assets/mocks/aboutUs/bestPartner2.webp";
import bestPartner3 from "assets/mocks/aboutUs/bestPartner3.webp";

// OUR VALUES
import ourValuesEntrepreneurship from "assets/mocks/aboutUs/ourValuesEntrepreneurship.png";
import ourValuesExcellence from "assets/mocks/aboutUs/ourValuesExcellence.png";
import ourValuesSustainability from "assets/mocks/aboutUs/ourValuesSustainability.png";
import ourValuesTransparency from "assets/mocks/aboutUs/ourValuesTransparency.png";

// OUR INDUSTRIES
import pharma from "assets/mocks/industries/pharma.png";
import greenEnergy from "assets/mocks/industries/greenEnergy.png";
import agriculture from "assets/mocks/industries/agriculture.png";
import realEstate from "assets/mocks/industries/realEstate.png";
import portOperator from "assets/mocks/industries/portOperator.png";
import refinery from "assets/mocks/industries/refinery.png";
import it from "assets/mocks/industries/it.png";
import factory from "assets/mocks/industries/factory.png";

import pharmaIcon from "assets/mocks/industries/pharmaIcon.svg";
import greenEnergyIcon from "assets/mocks/industries/greenEnergyIcon.svg";
import agricultureIcon from "assets/mocks/industries/agricultureIcon.svg";
import realEstateIcon from "assets/mocks/industries/realEstateIcon.svg";
import portOperatorIcon from "assets/mocks/industries/portOperatorIcon.svg";
import refineryIcon from "assets/mocks/industries/refineryIcon.svg";
import itIcon from "assets/mocks/industries/itIcon.svg";
import factoryIcon from "assets/mocks/industries/factoryIcon.svg";

// LEADERSHIP
import anaVerjelProfileExtended from "assets/mocks/aboutUs/AnaVerjelProfileExtended.webp";
import avramGalProfileExtended from "assets/mocks/aboutUs/AvramGalProfileExtended.webp";
import andreeaTomaProfileExtended from "assets/mocks/aboutUs/AndreeaTomaProfileExtended.webp";
import onisimDorneanuProfileExtended from "assets/mocks/aboutUs/OnisimDorneanuProfileExtended.webp";

export const mobileBestPartnerCarousel = [
  {
    id: 1,
    title: "",
    type: "card",
    text: "",
    source: bestPartner1,
  },
  {
    id: 2,
    title: "",
    type: "card",
    text: "",
    source: bestPartner2,
  },
  {
    id: 3,
    title: "",
    type: "card",
    text: "",
    source: bestPartner3,
  },
];

export const desktopOurValuesCardList = [
  {
    title: globalIntl.formatMessage({
      id: "entrepreneurshipAboutPageCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "entrepreneurshipAboutPageCardText" }),
    source: ourValuesEntrepreneurship,
  },
  {
    title: globalIntl.formatMessage({
      id: "excellenceAboutPageCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "excellenceAboutPageCardText" }),
    source: ourValuesExcellence,
  },
  {
    title: globalIntl.formatMessage({
      id: "transparencyAboutPageCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "transparencyAboutPageCardText" }),
    source: ourValuesTransparency,
  },
  {
    title: globalIntl.formatMessage({
      id: "sustainabilityAboutPageCardTitle",
    }),
    text: globalIntl.formatMessage({ id: "sustainabilityAboutPageCardText" }),
    source: ourValuesSustainability,
  },
];

export const cardsDataIndustries = [
  {
    title: globalIntl.formatMessage({ id: "industriesAboutPagePharmaCard" }),
    icon: pharmaIcon,
    image: pharma,
    path: "/pharma",
  },
  {
    title: globalIntl.formatMessage({
      id: "industriesAboutPageGreenEnergyCard",
    }),
    icon: greenEnergyIcon,
    image: greenEnergy,
    path: "/green-energy",
  },
  {
    title: globalIntl.formatMessage({
      id: "industriesAboutPageAgricultureCard",
    }),
    icon: agricultureIcon,
    image: agriculture,
    path: "/agriculture",
  },
  {
    title: globalIntl.formatMessage({
      id: "industriesAboutPageRealEstateCard",
    }),
    icon: realEstateIcon,
    image: realEstate,
    path: "/real-estate",
  },
  {
    title: globalIntl.formatMessage({
      id: "industriesAboutPagePortOperatorCard",
    }),
    icon: portOperatorIcon,
    image: portOperator,
    path: "/port-operator",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesAboutPageRefineryCard" }),
    icon: refineryIcon,
    image: refinery,
    path: "/refinery",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesAboutPageITCard" }),
    icon: itIcon,
    image: it,
    path: "/information-technology",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesAboutPageFactoryCard" }),
    icon: factoryIcon,
    image: factory,
    path: "/factory",
  },
];

export const cardsDataLeadership = [
  {
    source: onisimDorneanuProfileExtended,
    name: "Onisim Dorneanu",
    status: globalIntl.formatMessage({ id: "leadershipDorneanuCardStatus" }),
    modalContent: {
      name: "Onisim Dorneanu",
      img: onisimDorneanuProfileExtended,
      subtitle: globalIntl.formatMessage({
        id: "leadershipDorneanuCardStatus",
      }),
      text: globalIntl.formatMessage(
        {
          id: "leadershipDorneanuCardText",
        },
        { br: <br /> }
      ),
    },
  },
  {
    source: avramGalProfileExtended,
    name: "Avram Gal",
    status: globalIntl.formatMessage({ id: "leadershipGalCardStatus" }),
    modalContent: {
      name: "Avram Gal",
      img: avramGalProfileExtended,
      subtitle: globalIntl.formatMessage({ id: "leadershipGalCardStatus" }),
      text: globalIntl.formatMessage(
        { id: "leadershipGalCardText" },
        { br: <br /> }
      ),
    },
  },
  {
    source: andreeaTomaProfileExtended,
    name: "Andreea Toma",
    status: globalIntl.formatMessage({ id: "leadershipTomaCardStatus" }),
    modalContent: {
      name: "Andreea Toma",
      img: andreeaTomaProfileExtended,
      subtitle: globalIntl.formatMessage({ id: "leadershipTomaCardStatus" }),
      text: globalIntl.formatMessage(
        { id: "leadershipTomaCardText" },
        { br: <br /> }
      ),
    },
  },
  {
    source: anaVerjelProfileExtended,
    name: "Ana-Maria Verjel",
    status: globalIntl.formatMessage({ id: "leadershipVerjelCardStatus" }),
    modalContent: {
      name: "Ana-Maria Verjel",
      img: anaVerjelProfileExtended,
      subtitle: globalIntl.formatMessage({ id: "leadershipVerjelCardStatus" }),
      text: globalIntl.formatMessage(
        { id: "leadershipVerjelCardText" },
        { br: <br /> }
      ),
    },
  },
];

export const aboutUsAccordionData = [
  {
    title: globalIntl.formatMessage({ id: "firstAboutPageAccordionTitle" }),
    content: globalIntl.formatMessage({ id: "firstAboutPageAccordionText" }),
  },
  {
    title: globalIntl.formatMessage({ id: "secondAboutPageAccordionTitle" }),
    content: globalIntl.formatMessage({ id: "secondAboutPageAccordionText" }),
  },
  {
    title: globalIntl.formatMessage({ id: "thirdAboutPageAccordionTitle" }),
    content: globalIntl.formatMessage({ id: "thirdAboutPageAccordionText" }),
  },
  {
    title: globalIntl.formatMessage({ id: "fourthAboutPageAccordionTitle" }),
    content: globalIntl.formatMessage({ id: "fourthAboutPageAccordionText" }),
  },
];
