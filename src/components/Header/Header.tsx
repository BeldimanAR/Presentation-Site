import { useState, useEffect } from "react";
// STYLES
import * as Styled from "./HeaderStyled";

// LIBRARIES
import { useCurrentDevice } from "hooks/useCurrentDevice";
import { useNavigate } from "react-router-dom";

import { IProps } from "./HeaderModel";

// MISC

// COMPONENTS
import DropdownAtom from "components/Atoms/CustomDropdown/CustomDropdown";
import LogoAtom from "components/Atoms/CustomLogo/CustomLogo";
import languageIcon from "assets/atomsAssets/languageIcon.svg";
import dropdownArrow from "assets/atomsAssets/dropdownArrow.svg";
import ButtonAtom from "components/Atoms/CustomButton/CustomButton";
import { HandleTheme } from "helpers/themeHandler";
import { useFormatMessage } from "hooks/useFormatMessage";
import { globalIntl } from "config/IntlGlobalProvider";
import { DEVICE_TYPE } from "constants/variables";
import { ISelectOption } from "components/Atoms/CustomDropdown/CustomDropdownModel";

const Header = (props: IProps) => {
  // PROPS
  const { isOpen = false, setIsOpen = () => {} } = props;

  // CONSTANTS USING LIBRARIES
  const { windowSize, currentDevice } = useCurrentDevice();
  const navigate = useNavigate();
  const lang = localStorage.getItem("language");

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  const engLanguage = globalIntl.formatMessage({
    id: windowSize.width >= 1280 ? "languageEnglish" : "languageEnglishMobile",
  });
  const roLanguage = globalIntl.formatMessage({
    id: windowSize.width >= 1280 ? "languageRomana" : "languageRomanaMobile",
  });

  const options = [
    { label: engLanguage, value: "en" },
    { label: roLanguage, value: "ro" },
  ];
  const dropdownPlaceholder = globalIntl.formatMessage({
    id: "languagePlaceholder",
  });
  const buttons = [
    { name: useFormatMessage("investButtonText"), path: "/projects" },
    { name: useFormatMessage("strategyButtonText"), path: "/impact-strategy" },
    { name: useFormatMessage("aboutButtonText"), path: "/about-us" },
    { name: useFormatMessage("contactButtonText"), path: "/contact" },
  ];
  let theme = HandleTheme();
  const [language, setLanguage] = useState<ISelectOption | undefined>();

  // USE EFFECT FUNCTION

  useEffect(() => {
    if (lang === "en") {
      setLanguage(options[0]);
    } else {
      setLanguage(options[1]);
    }
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleClick = (path: string) => {
    navigate(path);
  };
  const handleLanguageChange = (language: ISelectOption | undefined) => {
    setLanguage(language);
    localStorage.setItem("language", `${language?.value}`);
    navigate(0);
  };

  return (
    <Styled.HeaderContainer theme={theme}>
      <Styled.HeaderLogoContainer onClick={() => handleClick("/")}>
        <LogoAtom
          type={theme === "dark" || theme === "transparent" ? "light" : "dark"}
        />
      </Styled.HeaderLogoContainer>

      {currentDevice === "desktop" ? (
        <Styled.HeaderUtilityContainer>
          <Styled.HeaderButtonsContainer>
            {buttons?.map((button, index) => {
              return (
                <Styled.HeaderButtonWrapper key={`header-button--${index}`}>
                  <ButtonAtom
                    text={button.name}
                    handleClick={() => handleClick(button.path)}
                    buttonStyle={
                      theme === "dark" || theme === "transparent"
                        ? "primaryDark"
                        : "primaryLight"
                    }
                    isSelected={window.location.pathname === button.path}
                  />
                </Styled.HeaderButtonWrapper>
              );
            })}
          </Styled.HeaderButtonsContainer>
          <Styled.HeaderLanguageContainer isOpen={isOpen}>
            <DropdownAtom
              value={language}
              onChange={(language) => handleLanguageChange(language)}
              options={options}
              placeholder={dropdownPlaceholder}
              icon={languageIcon}
              dropdownArrow={dropdownArrow}
              dropdownStyle={
                theme === "dark" || theme === "transparent" ? "light" : "dark"
              }
            />
          </Styled.HeaderLanguageContainer>
        </Styled.HeaderUtilityContainer>
      ) : (
        <Styled.HeaderUtilityContainer>
          <Styled.HeaderLanguageContainer isOpen={isOpen}>
            <DropdownAtom
              value={language}
              options={options}
              onChange={(language) => handleLanguageChange(language)}
              icon={languageIcon}
              dropdownStyle={
                theme === "dark" || theme === "transparent" ? "light" : "dark"
              }
            />
          </Styled.HeaderLanguageContainer>
          <Styled.HeaderHamburgerContainer>
            <Styled.HeaderHamburgerMenu
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <Styled.HeaderHamburgerMenuSlide
                number="1"
                open={isOpen}
                menuStyle={
                  theme === "dark" || theme === "transparent" ? "light" : "dark"
                }
              />
              <Styled.HeaderHamburgerMenuSlide
                number="2"
                open={isOpen}
                menuStyle={
                  theme === "dark" || theme === "transparent" ? "light" : "dark"
                }
              />
              <Styled.HeaderHamburgerMenuSlide
                number="3"
                open={isOpen}
                menuStyle={
                  theme === "dark" || theme === "transparent" ? "light" : "dark"
                }
              />
            </Styled.HeaderHamburgerMenu>
          </Styled.HeaderHamburgerContainer>
        </Styled.HeaderUtilityContainer>
      )}
    </Styled.HeaderContainer>
  );
};

export default Header;
