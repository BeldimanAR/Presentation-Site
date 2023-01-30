import IconAtom from "components/Atoms/CustomIcon/CustomIcon";
import LogoAtom from "components/Atoms/CustomLogo/CustomLogo";
import linkedInIcon from "assets/atomsAssets/linkedInIcon.svg";
import instagramIcon from "assets/atomsAssets/instagramIcon.svg";
import facebookIcon from "assets/atomsAssets/facebookIcon.svg";
import twitterIcon from "assets/atomsAssets/twitterIcon.svg";
import { useCurrentDevice } from "hooks/useCurrentDevice";

// STYLES
import * as Styled from "./FooterStyled";
import { useFormatMessage } from "hooks/useFormatMessage";
import { useNavigate } from "react-router-dom";

// LIBRARIES

// MISC

// COMPONENTS

const Footer = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const { currentDevice } = useCurrentDevice();
  const navigate = useNavigate();
  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
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

  const footerText = {
    addressTitle: useFormatMessage("addressTitle"),
    addressFirstLine: useFormatMessage("addressFirstLine"),
    addressSecondLine: useFormatMessage("addressSecondLine"),
    addressThirdLine: useFormatMessage("addressThirdLine"),
    termsTitle: useFormatMessage("termsTitle"),
    termsText: useFormatMessage("termsText"),
    socialTitle: useFormatMessage("socialTitle"),
  };

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const handleClick = () => {
    // navigate("/terms");
  };

  return (
    <Styled.FooterContainer>
      {currentDevice === "desktop" ? (
        <Styled.FooterContentContainer>
          <Styled.FooterContent side="left">
            <Styled.FooterFindUsWrapper>
              <Styled.FooterFindUsText type="title">
                {footerText.addressTitle}
              </Styled.FooterFindUsText>
              <Styled.FooterFindUsText type="text">
                {footerText.addressFirstLine}
              </Styled.FooterFindUsText>
              <Styled.FooterFindUsText type="text">
                {footerText.addressSecondLine}
              </Styled.FooterFindUsText>
              <Styled.FooterFindUsText type="text">
                {footerText.addressThirdLine}
              </Styled.FooterFindUsText>
            </Styled.FooterFindUsWrapper>
          </Styled.FooterContent>
          <Styled.FooterContent side="center">
            <Styled.LogoContainer>
              <LogoAtom type="light" />
            </Styled.LogoContainer>
            <Styled.FooterTermsContainer onClick={handleClick}>
              <Styled.FooterTermsText>
                {footerText.termsTitle}
              </Styled.FooterTermsText>
              <Styled.FooterTermsText>
                {footerText.termsText}
              </Styled.FooterTermsText>
            </Styled.FooterTermsContainer>
          </Styled.FooterContent>
          <Styled.FooterContent side="right">
            <Styled.FooterFollowContainer>
              <Styled.FooterFollowText>
                {footerText.socialTitle}
              </Styled.FooterFollowText>
              <Styled.FooterSocialContainer>
                {social?.map((item, index) => {
                  return (
                    <IconAtom
                      iconSrc={item.icon}
                      redirectUrl={item.url}
                      key={`icon--${index}`}
                    />
                  );
                })}
              </Styled.FooterSocialContainer>
            </Styled.FooterFollowContainer>
          </Styled.FooterContent>
        </Styled.FooterContentContainer>
      ) : (
        <Styled.FooterContentContainer>
          <Styled.LogoContainer>
            <LogoAtom type="light" />
          </Styled.LogoContainer>
          <Styled.FooterContent side="left">
            <Styled.FooterFindUsWrapper>
              <Styled.FooterFindUsText type="title">
                {footerText.addressTitle}
              </Styled.FooterFindUsText>
              <Styled.FooterFindUsText type="text">
                {footerText.addressFirstLine}
              </Styled.FooterFindUsText>
              <Styled.FooterFindUsText type="text">
                {footerText.addressSecondLine}
              </Styled.FooterFindUsText>
              <Styled.FooterFindUsText type="text">
                {footerText.addressThirdLine}
              </Styled.FooterFindUsText>
            </Styled.FooterFindUsWrapper>
          </Styled.FooterContent>
          <Styled.FooterContent side="center">
            <Styled.FooterFollowContainer>
              <Styled.FooterFollowText>
                {footerText.socialTitle}
              </Styled.FooterFollowText>
              <Styled.FooterSocialContainer>
                {social?.map((item, index) => {
                  return (
                    <IconAtom
                      iconSrc={item.icon}
                      redirectUrl={item.url}
                      key={`icon--${index}`}
                    />
                  );
                })}
              </Styled.FooterSocialContainer>
            </Styled.FooterFollowContainer>
            <Styled.FooterTermsContainer onClick={handleClick}>
              <Styled.FooterTermsText>
                {footerText.termsTitle}
              </Styled.FooterTermsText>
              <Styled.FooterTermsText>
                {footerText.termsText}
              </Styled.FooterTermsText>
            </Styled.FooterTermsContainer>
          </Styled.FooterContent>
        </Styled.FooterContentContainer>
      )}
    </Styled.FooterContainer>
  );
};

export default Footer;
