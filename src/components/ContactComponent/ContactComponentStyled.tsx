import styled from "styled-components";
import { COLORS, DEVICE_SIZE, FIX_SPACING, SPACING } from "constants/variables";

export const ContactComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primaryBlue};
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${SPACING.max50} ${FIX_SPACING.max110};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 20px 0;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: ${FIX_SPACING.max20};
  }
`;
export const TitleContainer = styled.div``;
export const TextContainer = styled.div`
  width: 30%;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
  }
`;
export const ButtonContainer = styled.div`
  width: 180px;
  height: 60px;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 160px;
    height: 40px;
    margin-top: 20px;
  }
`;
