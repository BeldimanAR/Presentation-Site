import { useState } from "react";

// STYLES
import * as Styled from "./LayoutStyled";

// LIBRARIES

// MISC
import { IProps } from "./LayoutModel";

// REDUX

// COMPONENTS
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import SideMenu from "components/SideMenu/SideMenu";
import ContactComponent from "components/ContactComponent/ContactComponent";

const Layout = (props: IProps) => {
  // PROPS
  const { children } = props;

  // CONSTANTS USING LIBRARIES
  const [isOpen, setIsOpen] = useState(false);

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.LayoutContainer>
      <Styled.HeaderWrapper>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </Styled.HeaderWrapper>
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      {window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ] !== "contact" && (
        <Styled.ContactWrapper>
          <ContactComponent />
        </Styled.ContactWrapper>
      )}
      <Styled.FooterWrapper>
        <Footer />
      </Styled.FooterWrapper>
      <Styled.SideMenuContainer isOpen={isOpen}>
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Styled.SideMenuContainer>
    </Styled.LayoutContainer>
  );
};

export default Layout;
