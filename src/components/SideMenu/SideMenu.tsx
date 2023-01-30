// STYLES

// LIBRARIES
import * as Styled from "./SideMenuStyled";

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS
import ButtonAtom from "components/Atoms/CustomButton/CustomButton";
import IconAtom from "components/Atoms/CustomIcon/CustomIcon";
import linkedInIcon from "assets/atomsAssets/linkedInIcon.svg";
import instagramIcon from "assets/atomsAssets/instagramIcon.svg";
import facebookIcon from "assets/atomsAssets/facebookIcon.svg";
import twitterIcon from "assets/atomsAssets/twitterIcon.svg";
import Header from "components/Header/Header";
import { IProps } from "./SideMenuModel";
import { useNavigate } from "react-router-dom";
import { HandleTheme } from "helpers/themeHandler";
import { useFormatMessage } from "hooks/useFormatMessage";

const SideMenu = (props: IProps) => {
  // PROPS
  const { isOpen = false, setIsOpen = () => {} } = props;

  // CONSTANTS USING LIBRARieS patza agramat
  const navigate = useNavigate();

  // CONSTANTS USING HOOKS
  let theme = HandleTheme();
  // GENERAL CONSTANTS

  const options = [
    { label: useFormatMessage("languageEnglish"), value: "english" },
    { label: useFormatMessage("languageRomana"), value: "romana" },
  ];
  const buttons = [
    { name: useFormatMessage("investButtonText"), path: "/projects" },
    { name: useFormatMessage("strategyButtonText"), path: "/impact-strategy" },
    { name: useFormatMessage("aboutButtonText"), path: "/about-us" },
    { name: useFormatMessage("contactButtonText"), path: "/contact" },
  ];

  const social = [
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

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <Styled.SideMenuContainer theme={theme}>
      <Styled.SideMenuHeaderContainer>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </Styled.SideMenuHeaderContainer>
      <Styled.SideMenuContentContainer>
        <Styled.SideMenuButtonsContainer>
          <Styled.SeparationLine theme={theme} />
          {buttons?.map((button, index) => {
            return (
              <Styled.SideMenuButtonWrapper key={`side-menu-btn--${index}`}>
                <ButtonAtom
                  text={button.name}
                  handleClick={() => handleClick(button.path)}
                  buttonStyle={
                    theme === "light" ? "sideMenuDark" : "sideMenuLight"
                  }
                />
                <Styled.SeparationLine theme={theme} />
              </Styled.SideMenuButtonWrapper>
            );
          })}
        </Styled.SideMenuButtonsContainer>
        <Styled.SideMenuSocialIconsContainer>
          {social?.map((item, index) => {
            return (
              <Styled.SideMenuSocialIconWrapper
                key={`side-menu-icon--${index}`}
                theme={theme}
              >
                <IconAtom iconSrc={item.icon} redirectUrl={item.url} />
              </Styled.SideMenuSocialIconWrapper>
            );
          })}
        </Styled.SideMenuSocialIconsContainer>
      </Styled.SideMenuContentContainer>
    </Styled.SideMenuContainer>
  );
};
export default SideMenu;
