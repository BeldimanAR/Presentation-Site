// STYLES
import closeIcon from "assets/atomsAssets/closeIcon.svg";
import * as Styled from "./CustomModalContentComponentStyled";

// LIBRARIES
import { IProps } from "./CustomModalContentComponentModel";
// MISC

import { useCurrentDevice } from "hooks/useCurrentDevice";
import { DEVICE_TYPE } from "constants/variables";

// COMPONENTS
import TextAtom from "components/Atoms/CustomText/CustomText";
import TitleAtom from "components/Atoms/CustomTitle/CustomTitle";

const ModalContent = (props: IProps) => {
  const {
    image = "",
    title = "",
    subtitle = "",
    text = "",
    onClickCloseModal = () => {},
  } = props;

  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const { currentDevice } = useCurrentDevice();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.CardWrapper>
      {currentDevice === DEVICE_TYPE.MOBILE && (
        <Styled.ButtonDiv>
          <Styled.CloseButton type="button" onClick={onClickCloseModal}>
            <Styled.ButtonImage src={closeIcon} alt="closeIcon" />
          </Styled.CloseButton>
        </Styled.ButtonDiv>
      )}
      <Styled.CardImage image={image}>
        <Styled.CardBackdrop>
          <Styled.TitleAtomContainer>
            <TitleAtom
              title={title}
              subtitle={subtitle}
              titleStyle="modalContent"
              subtitleStyle="modalContent"
            />
          </Styled.TitleAtomContainer>
        </Styled.CardBackdrop>
      </Styled.CardImage>
      <Styled.CardTextContainer>
        {currentDevice === DEVICE_TYPE.DESKTOP && (
          <Styled.ButtonDiv>
            <Styled.CloseButton type="button" onClick={onClickCloseModal}>
              <Styled.ButtonImage src={closeIcon} alt="closeIcon" />
            </Styled.CloseButton>
          </Styled.ButtonDiv>
        )}
        <Styled.CardTextBottomPart>
          <Styled.CardText>
            <TextAtom textStyle="modalContent" text={text} />
          </Styled.CardText>
        </Styled.CardTextBottomPart>
      </Styled.CardTextContainer>
    </Styled.CardWrapper>
  );
};

export default ModalContent;
