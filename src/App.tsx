// LIBRARIES
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

// COMPONENTS
import AppRoutes from "./config/AppRoutes";
import { en } from "locale/english/en";
import { ro } from "locale/romanian/ro";

import { createIntl, createIntlCache } from "react-intl";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  // CONSTANTS USING LIBRARIES
  const currentLanguageData = localStorage.getItem("language") || "en";

  // GENERAL CONSTANTS
  const message = { en, ro };

  const cache = createIntlCache();
  const intl = createIntl(
    // @ts-ignore
    { locale: currentLanguageData, messages: message[currentLanguageData] },
    cache
  );

  return (
    <IntlProvider
      locale={currentLanguageData}
      // @ts-ignore
      messages={message[currentLanguageData]}
    >
      <BrowserRouter>
        <ParallaxProvider>
          <AppRoutes />
        </ParallaxProvider>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
