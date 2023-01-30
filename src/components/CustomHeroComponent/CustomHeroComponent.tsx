import { IProps } from "./CustomHeroComponentModel";

// STYLES
import * as Styled from "./CustomHeroComponentStyled";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS
import TextAtom from "components/Atoms/CustomText/CustomText";

const HeroComponent = (props: IProps) => {
  // PROPS
  const { title = "", text = "", textStyle = "hero", imgSrc = "" } = props;
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.CustomHeroComponentContainer>
      <Styled.HeroImage image={imgSrc}>
        <Styled.Backdrop>
          <Styled.TextContainer>
            <TextAtom textStyle={textStyle} text={text} title={title} />
          </Styled.TextContainer>
        </Styled.Backdrop>
      </Styled.HeroImage>
    </Styled.CustomHeroComponentContainer>
  );
};

export default HeroComponent;
