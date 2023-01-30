// STYLES
import * as Styled from "./CostumReadMoreStyled";

// MISC
import { IProps } from "./CustomReadMoreModel";

import buttonArrow from "../../../assets/atomsAssets/buttonArrow.svg";
import buttonLine from "../../../assets/atomsAssets/buttonLine.svg";
const ReadMoreButtonAtom = (props: IProps) => {
  // PROPS
  const {
    text = "",
    handleClick,
    buttonStyle = "primary",
    isSelected = false,
  } = props;

  return (
    <Styled.ButtonWrapper>
      <Styled.ButtonComponent onClick={handleClick} id={"btn-arrow"}>
        <Styled.ButtonText>
          <Styled.ButtonLine src={buttonLine} id={"line"} />

          {text}

          <Styled.ButtonArrow src={buttonArrow} id={"arrow"} />
        </Styled.ButtonText>
      </Styled.ButtonComponent>
    </Styled.ButtonWrapper>
  );
};

export default ReadMoreButtonAtom;
