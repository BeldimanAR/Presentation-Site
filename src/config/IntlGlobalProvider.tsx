import { createIntlCache, createIntl } from "react-intl";
import { en } from "../locale/english/en";
import { ro } from "../locale/romanian/ro";

const currentLanguageData = localStorage.getItem("language") || "en";

// GENERAL CONSTANTS
const message = { en, ro };

const cache = createIntlCache();
export const globalIntl = createIntl(
  // @ts-ignore
  { locale: currentLanguageData, messages: message[currentLanguageData] },
  cache
);
