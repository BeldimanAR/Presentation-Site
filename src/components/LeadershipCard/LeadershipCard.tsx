import { IProps } from "./LeadershipCardModel";
import * as Styled from "./LeadershipCardStyled";
import CustomButton from "components/Atoms/CustomButton/CustomButton";
import { useState } from "react";
import { useCurrentDevice } from "hooks/useCurrentDevice";

const LeadershipCard = (props: IProps) => {
  const { status = "", name = "", source = "" } = props;

  const [isHover, setIsHover] = useState<boolean>(false);

  const { currentDevice, windowSize } = useCurrentDevice();

  return (
    <Styled.LeadershipCardContainer image={source}>
      <Styled.LeadershipCardTextContainer
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Styled.LeadershipCardNameWrapper>
          <Styled.LeadershipCardName>{name}</Styled.LeadershipCardName>
          <Styled.LeadershipCardOcupation>
            {status}
          </Styled.LeadershipCardOcupation>
          {windowSize.width >= 1250 ? (
            <Styled.LeadershipBtnContainer isHover={isHover}>
              <CustomButton
                text="Read More"
                handleClick={() => {}}
                buttonStyle="tertiary"
              />
            </Styled.LeadershipBtnContainer>
          ) : (
            <Styled.MobileButton>Read More</Styled.MobileButton>
          )}
        </Styled.LeadershipCardNameWrapper>
      </Styled.LeadershipCardTextContainer>
    </Styled.LeadershipCardContainer>
  );
};

export default LeadershipCard;
