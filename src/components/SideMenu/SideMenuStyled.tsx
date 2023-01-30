import styled, { css } from "styled-components";
import { COLORS } from "constants/variables";

export const SideMenuContainer = styled.div(
  ({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    background-color: ${theme === "dark" || theme === "transparent"
      ? COLORS.primaryDarkBlue
      : COLORS.backgroundColor};

    position: fixed;
    height: 100vh;
  `
);

export const SideMenuHeaderContainer = styled.div`
  width: 100%;
  height: 123px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SideMenuContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 123px);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  gap: 120px;
`;

export const SideMenuButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const SideMenuSocialIconsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SideMenuButtonWrapper = styled.div``;

export const SideMenuSocialIconWrapper = styled.div(
  ({ theme }) => css`
    ${theme === "light"
      ? css`
          filter: brightness(0) saturate(100%) invert(16%) sepia(69%)
            saturate(1429%) hue-rotate(200deg) brightness(92%) contrast(104%);
        `
      : css`
          filter: brightness(0) saturate(100%) invert(100%) sepia(2%)
            saturate(3174%) hue-rotate(190deg) brightness(108%) contrast(87%);
        `}
  `
);

export const SeparationLine = styled.div(
  ({ theme }) => css`
    width: 90%;
    height: 2px;
    background-color: ${theme === "light"
      ? COLORS.primaryBlue
      : COLORS.backgroundColor}40;
    margin: 20px auto 0 auto;
    border-radius: 100px;
  `
);
