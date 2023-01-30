import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const LogoImage = styled.img`
  height: 100%;
  width: 100%;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    height: 100%;
  }
`;
