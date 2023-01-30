// LIBRARIES
import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  DEVICE_SIZE,
} from "constants/variables";

export const DropdownContainer = styled.div<{ dropdownStyle: string }>(
  ({ dropdownStyle }) => css`
    position: relative;
    width: 100%;
    min-height: 100%;
    border: 1px solid
      ${dropdownStyle === "dark"
        ? COLORS.primaryDarkBlue
        : COLORS.backgroundColor};
    display: flex;
    align-items: center;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    user-select: none;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      border: none;
      -webkit-tap-highlight-color: transparent;
    }
  `
);

export const DropdownIcon = styled.img<{ dropdownStyle: string }>(
  ({ dropdownStyle = "" }) => css`
    padding: 0 10px 0 10px;
    ${dropdownStyle !== "dark" &&
    css`
      filter: brightness(0) saturate(100%) invert(100%) sepia(2%)
        saturate(3174%) hue-rotate(190deg) brightness(108%) contrast(87%);
    `}

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 30px;
      padding: 0;
    }
  `
);

export const DropdownValue = styled.span<{ dropdownStyle: string }>(
  ({ dropdownStyle }) => css`
    flex-grow: 1;
    text-transform: capitalize;
    color: ${dropdownStyle === "dark"
      ? COLORS.primaryDarkBlue
      : COLORS.backgroundColor};
    font-weight: ${FONT_WEIGHT.regular};
    font-family: ${FONT_FAMILY.inter};
    font-size: ${FONT_SIZE.max16};
  `
);

export const DropdownArrow = styled.img<{
  isOpen: boolean;
  dropdownStyle: string;
}>(
  ({ isOpen, dropdownStyle }) => css`
    margin: 4px 10px 0 14px;
    rotate: ${isOpen ? `180deg` : `0deg`};
    transition: 0.3s;

    ${dropdownStyle !== "dark" &&
    css`
      filter: brightness(0) saturate(100%) invert(100%) sepia(2%)
        saturate(3174%) hue-rotate(190deg) brightness(108%) contrast(87%);
    `}
  `
);

export const DropdownList = styled.ul<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    display: ${isOpen ? "block" : "none"};
    overflow-y: auto;
    border-radius: 5px;
    width: 100%;
    left: 0;
    top: calc(100% + 2px);
    background-color: ${COLORS.backgroundColor};
    z-index: 100;
    box-shadow: 0px 3px 6px 0px #00000029;
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: fit-content;
    }
  `
);

export const DropdownOption = styled.li<{
  selectedOption: boolean;
  highlightedOption: boolean;
}>(
  ({ selectedOption, highlightedOption }) => css`
    height: 31px;
    padding: 8px 0px 0px 10px;
    cursor: pointer;
    text-transform: capitalize;
    background-color: ${selectedOption ? `${COLORS.primaryLightBlue}4D` : ""};
    background-color: ${highlightedOption ? `${COLORS.primaryGray}4D` : ""};
    color: ${COLORS.primaryDarkBlue};
    font-family: ${FONT_FAMILY.inter};
    font-size: ${FONT_SIZE.max16};
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      padding: 8px 10px 0px 10px;
    }
  `
);
