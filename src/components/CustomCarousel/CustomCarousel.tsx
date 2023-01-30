// STYLES
import CustomProjectCard from "components/CustomProjectCard/CustomProjectCard";
import { FormattedMessage } from "react-intl";
import { IProps } from "./CustomCarouselModel";
import * as Styled from "./CustomCarouselStyled";

// LIBRARIES

// MISC

// COMPONENTS

export default function CustomCarousel(props: IProps) {
  // PROPS
  const { data = [] } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.CardsContainer>
      {data.map((item, index) => {
        return (
          item.path &&
          item.path !==
            window.location.pathname.split("/")[
              window.location.pathname.split("/").length - 1
            ] && (
            <Styled.CardWrapper index={index} key={index}>
              <CustomProjectCard
                source={item.source}
                title={item.title}
                text={item.text}
                path={item.path}
                textStyle="project"
                type="carousel"
              />
            </Styled.CardWrapper>
          )
        );
      })}
    </Styled.CardsContainer>
  );
}
