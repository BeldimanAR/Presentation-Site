import styled, { css } from "styled-components";
import { COLORS, FIX_SPACING } from "constants/variables";

export const CardCarouselContainer = styled.div`
  /* height: 100%; */
  /* height: 200[x]; */
  width: 100%;

  .carousel {
    .dot {
      background: grey;
      width: 15px;
      height: 15px;
      box-shadow: none;

      /* margin: 0 auto; */
    }
    .dot.selected {
      background-color: ${COLORS.primaryOrange};
      /* margin: 0 auto; */
    }
  }
  /* .react-multi-carousel-list {
  } */

  /* .react-multi-carousel-dot-list {
    padding: 40px 0 0 0;
    position: static;
    gap: 10px;
    width: fit-content;
    overflow-x: hidden;
    margin: 0 auto;
  } */

  ul.react-multi-carousel-track {
    /* transform: translate3d(0px, 0px, 0px) !important; */
    /* width: 100vw; */
  }

  li {
    /* border: 1px solid black; */
    /* width: 68vw !important; */
    /* height: 68vw !important; */
  }
`;

export const CardImage = styled.div<{ image: string }>(
  ({ image }) => css`
    min-height: 300px;

    /* width: 100%; */
    /* max-width: 640px; */
    height: 100%;
    border-radius: 6px;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
  `
);

export const CardWrapper = styled.div<{ index: number }>(
  ({ index }) => css`
    height: 100%;
  `
);

export const CarouselDot = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const CardWrapperContainer = styled.div`
  height: 372px;
`;
export const OverlayCardWrapperContainer = styled.div`
  height: 172px;
  div > img {
    height: 91px;
    margin-top: ${FIX_SPACING.max30};
  }

  div > p {
    margin-bottom: ${FIX_SPACING.max20};
  }
`;
