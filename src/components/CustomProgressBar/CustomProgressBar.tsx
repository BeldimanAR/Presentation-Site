import { IProps } from "./CustomProgressBarModel";
import * as Styled from "./CustomProgressBarStyled";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = (props: IProps) => {
  const { value = 0, text = "" } = props;

  return (
    <Styled.ProgressBarContainer>
      <Styled.ProgressBarComponent value={value} strokeWidth={11} />

      <Styled.ProgressBarTextWrapper>
        <Styled.ProgresBarText>{text}</Styled.ProgresBarText>
        <Styled.PercentageContainer>
          <Styled.Percentage>{value}%</Styled.Percentage>
        </Styled.PercentageContainer>
      </Styled.ProgressBarTextWrapper>
    </Styled.ProgressBarContainer>
  );
};

export default ProgressBar;
