import { globalIntl } from "config/IntlGlobalProvider";
import pic from "assets/cardImages/heroImages/homepageHero.webp";
import agriculturePic from "assets/mocks/industries/agriculture.png";
import factoryPic from "assets/mocks/industries/factory.png";
import greenEnergyPic from "assets/mocks/industries/greenEnergy.png";
import itPic from "assets/mocks/industries/it.png";
import pharmaPic from "assets/mocks/industries/pharma.png";
import portOperatorPic from "assets/mocks/industries/portOperator.png";
import realEstatePic from "assets/mocks/industries/realEstate.png";
import refineryPic from "assets/mocks/industries/refinery.png";
import cardIconOne from "assets/cardImages/cardIconOne.svg";
import linkedInIcon from "assets/atomsAssets/linkedInIcon.svg";
import instagramIcon from "assets/atomsAssets/instagramIcon.svg";
import facebookIcon from "assets/atomsAssets/facebookIcon.svg";
import twitterIcon from "assets/atomsAssets/twitterIcon.svg";
import greenEnergy from "assets/icons/greenEnergy.svg";
import agriculture from "assets/icons/agriculture.svg";
import realEstate from "assets/icons/realEstate.svg";
import portOperator from "assets/icons/portOperator.svg";
import refinery from "assets/icons/refinery.svg";
import it from "assets/icons/it.svg";
import factory from "assets/icons/factory.svg";

export const cardsDataIndustries = [
  {
    title: globalIntl.formatMessage({ id: "industriesHomePharmaCard" }),
    icon: cardIconOne,
    image: pharmaPic,
    path: "/pharma",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesHomeRealEstateCard" }),
    icon: realEstate,
    image: realEstatePic,
    path: "/real-estate",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesHomeGreenEnergyCard" }),
    icon: greenEnergy,
    image: greenEnergyPic,
    path: "/green-energy",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesHomeAgricultureCard" }),
    icon: agriculture,
    image: agriculturePic,
    path: "/agriculture",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesHomePortOperatorCard" }),
    icon: portOperator,
    image: portOperatorPic,
    path: "/port-operator",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesHomeRefineryCard" }),
    icon: refinery,
    image: refineryPic,
    path: "/refinery",
  },
  {
    title: globalIntl.formatMessage({
      id: "industriesHomeInternetTechnologyCard",
    }),
    icon: it,
    image: itPic,
    path: "/information-technology",
  },
  {
    title: globalIntl.formatMessage({ id: "industriesHomeFactoryCard" }),
    icon: factory,
    image: factoryPic,
    path: "/factory",
  },
];

export const social = [
  {
    icon: linkedInIcon,
    url: "https://www.linkedin.com/in/atlatic-partner-68344825a/",
  },
  {
    icon: instagramIcon,
    url: "https://www.instagram.com/atlantic_partner/",
  },
  {
    icon: facebookIcon,
    url: "https://web.facebook.com/atlanticpartner",
  },
  {
    icon: twitterIcon,
    url: "https://twitter.com/AtlaticPartner",
  },
];
