import { IProps } from "./CustomOverlayCardComponentModel";
import * as Styled from "./CustomOverlayCardComponentStyled";

const OverlayCardComponent = (props: IProps) => {
  const {
    text = "",
    icon = "",
    image = "",
    iconTitle = "",
    onClick = () => {},
  } = props;

  return (
    <Styled.CardWrapper onClick={onClick}>
      <Styled.CardImage image={image}>
        <Styled.CardBackdrop height={text && "38.8%"}>
          {text && <Styled.CardText>{text}</Styled.CardText>}
          {icon && (
            <Styled.CardIconWrapper>
              <Styled.CardIcon src={icon} />
              <Styled.CardIconTitle>{iconTitle}</Styled.CardIconTitle>
            </Styled.CardIconWrapper>
          )}
        </Styled.CardBackdrop>
      </Styled.CardImage>
    </Styled.CardWrapper>
  );
};

export default OverlayCardComponent;
