import { IProps } from "./CustomElemWrapperModel";
import * as Styled from "./CustomElemWrapperStyled";

const ElemWrapper = (props: IProps) => {
  const {
    title = "",
    topLine = "",
    bottomLine = "",
    firstChild,
    secondChild,
  } = props;

  return (
    <Styled.CustomWrapper>
      <Styled.TopContainer>
        <Styled.Title title={title}>{title}</Styled.Title>
        <Styled.TopLine topLine={topLine} />
      </Styled.TopContainer>
      <Styled.ContentContainer>
        <Styled.FirstChildContainer>{firstChild}</Styled.FirstChildContainer>
        <Styled.SecondChildContainer>{secondChild}</Styled.SecondChildContainer>
      </Styled.ContentContainer>
      <Styled.BottomContainer>
        <Styled.BottomLine bottomLine={bottomLine} />
      </Styled.BottomContainer>
    </Styled.CustomWrapper>
  );
};

export default ElemWrapper;
