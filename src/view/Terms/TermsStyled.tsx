import { DEVICE_SIZE, FIX_SPACING } from "constants/variables";
import styled from "styled-components";

export const TermsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${FIX_SPACING.max120} 0;
  row-gap: ${FIX_SPACING.max60};

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: ${FIX_SPACING.max60} 0;
    row-gap: ${FIX_SPACING.max60};
  }
`;

export const TermsPageTitleWrapper = styled.div`
  padding: 0 0 ${FIX_SPACING.max60} 0;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0;
  }
`;

export const TermsPageTextWrapper = styled.div``;

export const TermsPageContentContainer = styled.div`
  width: 44vw;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    padding: 0 ${FIX_SPACING.max20};
  }
`;

export const TermsPageAccordionWrapper = styled.div``;
