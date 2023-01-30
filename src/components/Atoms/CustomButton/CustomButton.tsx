// STYLES
import * as Styled from "./CustomButtonStyled";

// MISC
import { IProps } from "./CustomButtonModel";

import buttonArrow from "../../../assets/atomsAssets/buttonArrow.svg";
import buttonLine from "../../../assets/atomsAssets/buttonLine.svg";
const ButtonAtom = (props: IProps) => {
  // PROPS
  const {
    text = "",
    handleClick,
    buttonStyle = "primary",
    isSelected = false,
  } = props;

  return (
    <Styled.ButtonWrapper buttonStyle={buttonStyle}>
      <Styled.ButtonComponent
        onClick={handleClick}
        buttonStyle={buttonStyle}
        isSelected={isSelected}
        id={"btn-arrow"}
      >
        <Styled.ButtonText>
          {(buttonStyle === "tertiary" ||
            buttonStyle === "tertiaryHomepage") && (
            <Styled.ButtonLine src={buttonLine} id={"line"} />
          )}
          {text}
          {(buttonStyle === "tertiary" ||
            buttonStyle === "tertiaryHomepage") && (
            <Styled.ButtonArrow src={buttonArrow} id={"arrow"} />
          )}
        </Styled.ButtonText>
      </Styled.ButtonComponent>
    </Styled.ButtonWrapper>
  );
};

export default ButtonAtom;
