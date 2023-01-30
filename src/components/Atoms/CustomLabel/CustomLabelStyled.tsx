import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
} from "constants/variables";

export const LabelWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const LabelText = styled.p`
  padding: 10px 8px;
  border-bottom: 2px solid ${COLORS.primaryBlue}40;
  font-family: ${FONT_FAMILY.inter};
  font-size: ${FONT_SIZE.max18};
  font-weight: ${FONT_WEIGHT.semiBold};
  color: ${COLORS.primaryDarkBlue};
`;
