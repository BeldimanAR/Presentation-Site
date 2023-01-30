import styled from "styled-components";

import { COLORS, DEVICE_SIZE } from "constants/variables";

export const CustomCardContainer = styled.div`
  width: 100%;
  height: 100%;
  /* max-height: 500px; */
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primaryBlue};
  border-radius: 8px;
`;

export const CustomCardImageContainer = styled.div`
  height: 63%;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 45%;
  }
`;

export const CustomCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const CustomCardTextContainer = styled.div`
  padding: 25px 20px 10px;

  /* height: 37%; */
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    /* height: 55%; */
  }
`;
