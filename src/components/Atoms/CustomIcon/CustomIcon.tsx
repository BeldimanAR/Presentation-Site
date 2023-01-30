import { IProps } from "./CustomIconModel";
import * as Styled from "./CustomIconStyled";

const IconAtom = (props: IProps) => {
  const { iconSrc = "", redirectUrl = "" } = props;

  const handleClick = () => {
    window.open(redirectUrl, "_blank");
  };
  return (
    <Styled.IconContainer>
      <Styled.Icon src={iconSrc} onClick={handleClick} />
    </Styled.IconContainer>
  );
};

export default IconAtom;
