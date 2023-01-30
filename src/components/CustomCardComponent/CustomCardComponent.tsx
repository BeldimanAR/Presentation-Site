import { IProps } from "./CustomCardComponentModel";
import * as Styled from "./CustomCardComponentStyled";
import TextAtom from "components/Atoms/CustomText/CustomText";

const CustomCardComponent = (props: IProps) => {
  const { title = "", text = "", textStyle = "primary", source = "" } = props;

  return (
    <Styled.CustomCardContainer>
      <Styled.CustomCardImageContainer>
        <Styled.CustomCardImage src={source} alt={""} />
      </Styled.CustomCardImageContainer>
      <Styled.CustomCardTextContainer>
        <TextAtom title={title} text={text} textStyle={textStyle} />
      </Styled.CustomCardTextContainer>
    </Styled.CustomCardContainer>
  );
};

export default CustomCardComponent;
