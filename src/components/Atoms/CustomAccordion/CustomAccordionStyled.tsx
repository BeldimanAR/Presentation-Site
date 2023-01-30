import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";

export const AccordionContainer = styled.div`
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
`;

export const AccordionTitleWrapper = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px 13px 8px;
    border-bottom: 2px solid ${COLORS.primaryBlue}40;
  `
);

export const AccordionBorder = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    /* width: ${isOpen ? "50%" : "100%"};
    height: 2px;
    background-color: ${COLORS.primaryBlue}cc;
    opacity: ${isOpen ? 0 : 1};
    transition: all 0.5s; */
  `
);
export const AccordionTitle = styled.span`
  color: ${COLORS.primaryDarkBlue};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.max18v15};
  width: 90%;
`;

export const AccordionArrow = styled.img<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    rotate: ${isOpen ? `0deg` : `180deg`};
    transition: 0.3s;
    width: clamp(15px, 1vw, 20px);
  `
);

export const AccordionContentContainer = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    padding: 20px 50px 30px 8px;
    text-align: justify;
    text-justify: inter-word;
    opacity: ${isOpen ? "1" : "0"};
    height: ${isOpen ? "100%" : "0px"};
    overflow: hidden;
    transition: all 0.3s ease-out;
  `
);

export const AccordionContent = styled.p`
  color: ${COLORS.primaryDarkBlue};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.max18};
`;

export const AccordionContentWrapper = styled.div``;
