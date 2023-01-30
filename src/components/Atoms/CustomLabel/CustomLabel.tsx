import { IProps } from "./CustomLabelModel";
import * as Styled from "./CustomLabelStyled";

const LabelAtom = (props: IProps) => {
  const { text = "", number = null } = props;

  return (
    <Styled.LabelWrapper>
      <Styled.LabelText>
        {number !== null && number + 1 + `.`} {text}
      </Styled.LabelText>
    </Styled.LabelWrapper>
  );
};

export default LabelAtom;
