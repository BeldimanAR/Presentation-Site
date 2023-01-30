import { DEVICE_SIZE } from "constants/variables";
import styled from "styled-components";

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Icon = styled.img`
  cursor: pointer;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 25px;
    height: 25px;
  }
`;
