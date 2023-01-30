// STYLES
import ButtonAtom from "components/Atoms/CustomButton/CustomButton";
import TextAtom from "components/Atoms/CustomText/CustomText";
import TitleAtom from "components/Atoms/CustomTitle/CustomTitle";
import { IProps } from "./ContactComponentModel";
import * as Styled from "./ContactComponentStyled";

// LIBRARIES
import { useNavigate } from "react-router-dom";
import { useFormatMessage } from "hooks/useFormatMessage";

// MISC

// COMPONENTS

const ContactComponent = (props: IProps) => {
  // PROPS
  // const { title = '', text = '', textBtn = '', handleClick = () => {} } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const navigateContact = () => {
    navigate("/contact");
  };

  return (
    <Styled.ContactComponentContainer>
      <Styled.TitleContainer>
        <TitleAtom
          title={useFormatMessage("contactComponentTitle")}
          titleStyle="secondary"
        />
      </Styled.TitleContainer>
      <Styled.TextContainer>
        <TextAtom
          textStyle="contactUs"
          text={useFormatMessage("contactComponentText")}
        />
      </Styled.TextContainer>
      <Styled.ButtonContainer>
        <ButtonAtom
          buttonStyle="contactUs"
          text={useFormatMessage("contactComponentButtonText")}
          handleClick={navigateContact}
        />
      </Styled.ButtonContainer>
    </Styled.ContactComponentContainer>
  );
};
export default ContactComponent;
