import { useState } from "react";
import * as Styled from "./TermsStyled";

import { globalIntl } from "config/IntlGlobalProvider";

import TitleAtom from "components/Atoms/CustomTitle/CustomTitle";
import TextAtom from "components/Atoms/CustomText/CustomText";
import AccordionAtom from "components/Atoms/CustomAccordion/CustomAccordion";
import dropdownArrow from "assets/atomsAssets/dropdownArrow.svg";
import { termsAccordionsMock } from "mocks/termsMock";

const Terms = () => {
  const [isOpen, setIsOpen] = useState(-1);

  const handleAccordion = (id: number) => {
    // @ts-ignore
    setIsOpen((prevState) => (prevState === id ? null : id));
  };
  return (
    <Styled.TermsPageContainer>
      <Styled.TermsPageTitleWrapper>
        <TitleAtom
          title={globalIntl.formatMessage({ id: "termsTitle" })}
          titleStyle="terms"
        />
      </Styled.TermsPageTitleWrapper>
      <Styled.TermsPageContentContainer>
        <Styled.TermsPageTextWrapper>
          <TextAtom
            textStyle="paragraphDark"
            title={globalIntl.formatMessage({ id: "termsDisclaimerTitle" })}
            text={globalIntl.formatMessage(
              { id: "termsDisclaimerText" },
              { br: <br /> }
            )}
          />
        </Styled.TermsPageTextWrapper>
      </Styled.TermsPageContentContainer>
      <Styled.TermsPageContentContainer>
        <Styled.TermsPageTextWrapper>
          <TextAtom
            textStyle="paragraphDark"
            title={globalIntl.formatMessage({ id: "termsOfUseTitle" })}
            text={globalIntl.formatMessage(
              { id: "termsOfUse" },
              { br: <br /> }
            )}
          />
        </Styled.TermsPageTextWrapper>
      </Styled.TermsPageContentContainer>
      <Styled.TermsPageContentContainer>
        {termsAccordionsMock?.map((accordion, index) => {
          return (
            <Styled.TermsPageAccordionWrapper key={`terms-accordion--${index}`}>
              <AccordionAtom
                title={accordion.title}
                content={accordion.content}
                dropdownArrow={dropdownArrow}
                isOpen={isOpen === index}
                handleToggle={() => handleAccordion(index)}
              />
            </Styled.TermsPageAccordionWrapper>
          );
        })}
      </Styled.TermsPageContentContainer>
    </Styled.TermsPageContainer>
  );
};

export default Terms;
