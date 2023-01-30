import { useState } from "react";
import { IProps } from "./CustomTextModel";

// STYLES
import * as Styled from "./CustomTextStyled";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const TextAtom = (props: IProps) => {
  // PROPS
  const { title = "", text = "", textStyle = "primary" } = props;
  const [width, setWidth] = useState(0);

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS
  const resizeWin = () => {
    if (window.innerWidth < 602) {
      setWidth(window.innerWidth);
    }
  };

  window.addEventListener("resize", resizeWin);
  // HANDLERS FUNCTIONS

  return (
    <Styled.TextWrapper textStyle={textStyle}>
      {title && !!title && (
        <Styled.Title textStyle={textStyle}>
          {/* {globalIntl.formatMessage({ id: title })} */}
          {title}
        </Styled.Title>
      )}
      {textStyle === "project" && width > 601 && (
        <Styled.Line textStyle={textStyle}></Styled.Line>
      )}
      {text && !!text && (
        <Styled.Text textStyle={textStyle}>
          {/* {globalIntl.formatMessage({ id: text })} */}
          {text}
        </Styled.Text>
      )}
    </Styled.TextWrapper>
  );
};

export default TextAtom;
