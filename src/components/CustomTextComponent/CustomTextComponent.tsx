import React from "react";

// STYLES
import * as Styled from "./CustomTextComponentStyled";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS
import TextAtom from "components/Atoms/CustomText/CustomText";
import ButtonAtom from "components/Atoms/CustomButton/CustomButton";
import { IProps } from "./CustomTextComponentModel";

const TextComponent = (props: IProps) => {
  // PROPS
  const {
    title = "",
    text = "",
    buttonText = "",
    handleClick = () => {},
    textStyle = "primary",
    buttonStyle = "primaryLight",
  } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.CustomTextComponentContainer>
      <Styled.TextComponentWrapper>
        <TextAtom title={title} text={text} textStyle={textStyle}></TextAtom>
      </Styled.TextComponentWrapper>
      <Styled.ButtonComponentWrapper>
        <ButtonAtom
          text={buttonText}
          handleClick={handleClick}
          buttonStyle={buttonStyle}
        ></ButtonAtom>
      </Styled.ButtonComponentWrapper>
    </Styled.CustomTextComponentContainer>
  );
};

export default TextComponent;
