// STYLES
// @ts-nocheck
import { useState } from "react";
import { IProps } from "./ProjectCarouselModel";
import * as Styled from "./ProjectCarouselStyled";
import Carousel from "react-multi-carousel";
import CustomProjectCard from "components/CustomProjectCard/CustomProjectCard";
import rightArrow from "../../assets/icons/rightArrow.svg";
// LIBRARIES

// MISC

// COMPONENTS

export default function ProjectCarousel(props: IProps) {
  // PROPS
  const { data = [] } = props;
  const [next, setNext] = useState(1);

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 640 },
      items: 1,
      slidesToSlide: 1,
    },

    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <Styled.ButtonsWrapper>
        <img
          src={rightArrow}
          style={{ transform: "rotate(180deg)" }}
          onClick={() => previous()}
        />
        <img src={rightArrow} onClick={() => next()} />
        {/* <div onClick={() => previous()}>back</div>
        <div onClick={() => next()}>next</div> */}
      </Styled.ButtonsWrapper>
    );
  };

  return (
    <Styled.CarouselWrapper>
      {/* <Styled.Label style={{ position: "absolute", top: 0 }}>
        Others Were Interested In
      </Styled.Label> */}
      <Carousel
        responsive={responsive}
        // customButtonGroup={<ButtonGroup />}
        // renderButtonGroupOutside={true}
        // arrows={false}
        // beforeChange={(nextSlide, { currentSlide }) => {
        //   setNext(nextSlide + 1);
        // }}
        // centerMode={true}
      >
        {data.map((item, index) => {
          console.log(item);
          return (
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "red",
              }}
            >
              {item.title}
            </div>
            // <Styled.CardWrapper index={index} key={`carousel-slide--${index}`}>
            //   <CustomProjectCard
            //     title={item.title}
            //     text={item.text}
            //     source={item.source}
            //     type="card"
            //     isFullWidth={true}
            //   />
            // </Styled.CardWrapper>
          );
        })}
      </Carousel>
    </Styled.CarouselWrapper>
  );
}
