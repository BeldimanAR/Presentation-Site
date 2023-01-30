import { DEVICE_SIZE } from "constants/variables";
import styled, { css } from "styled-components";

export const CustomImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  background-color: transparent;
  gap: 20px;
`;

export const ImageContainer = styled.img(
  ({ width }) => css`
    width: ${width};
    height: 480px;
    border-radius: 6px;
    object-fit: cover;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 70%;
      height: 300px;
    }
  `
);
