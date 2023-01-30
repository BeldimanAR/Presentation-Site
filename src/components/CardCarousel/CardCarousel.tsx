// @ts-nocheck
import { useState } from "react";

// STYLES
import * as Styled from "./CardCarouselStyled";

// LIBRARIES
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// MISC
import { IProps } from "./CardCarouselModel";

// COMPONENTS
import { useNavigate } from "react-router-dom";
import CustomProjectCard from "components/CustomProjectCard/CustomProjectCard";
import CustomCardComponent from "components/CustomCardComponent/CustomCardComponent";
import LeadershipCard from "components/LeadershipCard/LeadershipCard";
import CustomOverlayCardComponent from "components/CustomOverlayCardComponent/CustomOverlayCardComponent";
import { useCurrentDevice } from "hooks/useCurrentDevice";

const CardCarousel = (props: IProps) => {
  // PROPS
  const {
    content = [],
    type = "image",
    handleLeaderShipModal = () => {},
  } = props;

  // CONSTANTS USING LIBRARIES
  const { windowSize } = useCurrentDevice();

  // CONSTANTS USING HOOKS
  const [next, setNext] = useState(1);
  const [selectedItem, setSelectedItem] = useState(0);

  // GENERAL CONSTANTS
  const cardSize = windowSize.width <= 910 ? 68 : 33;

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const navigate = useNavigate();
  const handleNavigation = (isProject: boolean, path: string) => {
    if (isProject) {
      navigate(`/project/${path}`);
      navigate(0);
    } else {
      navigate(path);
      navigate(0);
    }
  };

  const handleCards = (type: string, item: any) => {
    switch (type) {
      case "image":
        return <Styled.CardImage image={item.source} />;
      case "project":
        return (
          <Styled.CardWrapperContainer>
            <CustomProjectCard
              text={item.text}
              title={item.title}
              source={item.source}
              type="card"
            />
          </Styled.CardWrapperContainer>
        );
      case "card":
        return (
          <Styled.CardWrapperContainer>
            <CustomCardComponent
              text={item.text}
              title={item.title}
              source={item.source}
              textStyle="card"
            />
          </Styled.CardWrapperContainer>
        );
      case "leadership":
        return (
          <LeadershipCard
            name={item.name}
            status={item.status}
            source={item.source}
          />
        );
      case "overlay":
        return (
          <Styled.OverlayCardWrapperContainer>
            <CustomOverlayCardComponent
              iconTitle={item.title}
              icon={item.icon}
              image={item.image}
            />
          </Styled.OverlayCardWrapperContainer>
        );
      default:
        break;
    }
  };

  // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  //   const {
  //     carouselState: { currentSlide },
  //   } = rest;
  //   return (
  //     <div className="carousel-button-group" style={{ position: "absolute" }}>
  //       <div
  //         className={currentSlide === 0 ? "disable" : ""}
  //         onClick={() => previous()}
  //       />
  //       <div onClick={() => next()} />
  //       <div onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </div>
  //     </div>
  //   );
  // };

  const localContent = content.filter((item) => {
    return (
      item.path !==
        window.location.pathname.split("/")[
          window.location.pathname.split("/").length - 1
        ] && item
    );
  });

  return (
    <Styled.CardCarouselContainer>
      <Carousel
        onChange={(nextSlide, currentSlide) => {
          setNext(nextSlide + 1);
          // setSelectedItem(nextSlide);
        }}
        showArrows={false}
        centerMode
        swipeable
        showIndicators
        showStatus={false}
        showThumbs={false}
        emulateTouch
        selectedItem={selectedItem}
        centerSlidePercentage={cardSize}
        onClickItem={(index, nextSlide) => {
          next === index + 1 && handleLeaderShipModal(index);

          setNext(index + 1);
          setSelectedItem(index);

          next === index + 1 &&
            handleNavigation(
              localContent[index].isProject,
              localContent[index].path
            );
        }}
      >
        {localContent?.map((item, index) => {
          return (
            <div
              key={`card-carousel-${item.title}--${index}`}
              style={
                index !== next - 1
                  ? {
                      minWidth: `${cardSize}vw`,
                      padding: "0 10px 50px",
                      opacity: "0.5",
                    }
                  : {
                      minWidth: `${cardSize}vw`,
                      padding: "0 10px 50px",
                    }
              }
            >
              <Styled.CardWrapper
                index={index}
                key={`carousel-slide--${index}`}
              >
                {handleCards(type, item)}
              </Styled.CardWrapper>
            </div>
          );
        })}
      </Carousel>
    </Styled.CardCarouselContainer>
  );
};

export default CardCarousel;
