import { IProps } from "./CustomImageComponentModel";
import * as Styled from "./CustomImageComponentStyled";

const CustomImageComponent = (props: IProps) => {
  const { lists } = props;

  return (
    <Styled.CustomImageContainer>
      {lists?.map((item, index) => {
        let width = "";
        if (index === 0) {
          width = "17%";
        } else if (index === 1) {
          width = "49%";
        } else if (index === 2) {
          width = "29%";
        }
        return (
          <Styled.ImageContainer
            key={index}
            src={item}
            width={width}
            alt="image"
          />
        );
      })}
    </Styled.CustomImageContainer>
  );
};

export default CustomImageComponent;
