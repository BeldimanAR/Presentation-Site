import { IProps } from "./CustomTitleModel";

// STYLES
import * as Styled from "./CustomTitleStyled";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const TitleAtom = (props: IProps) => {
  // PROPS
  const {
    title = "",
    subtitle = "",
    titleStyle = "primary",
    subtitleStyle = "primary",
  } = props;
  // textStyle = 'primary'

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS
  // const resizeWin = () => {
  //   if (window.innerWidth < 602) {
  //     setWidth(window.innerWidth);
  //   }
  // };

  // window.addEventListener('resize', resizeWin);
  // HANDLERS FUNCTIONS

  return (
    <Styled.CustomTitleContainer>
      <Styled.TitleContainer titleStyle={titleStyle}>
        {title}
      </Styled.TitleContainer>
      <Styled.SubtitleContainer subtitleStyle={subtitleStyle}>
        {subtitle}
      </Styled.SubtitleContainer>
    </Styled.CustomTitleContainer>
  );
};

export default TitleAtom;
