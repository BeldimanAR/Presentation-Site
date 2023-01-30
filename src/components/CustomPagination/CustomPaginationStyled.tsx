import {
  COLORS,
  DEVICE_SIZE,
  FONT_FAMILY,
  FONT_WEIGHT,
} from "constants/variables";
import styled from "styled-components";
import { Pagination } from "@mui/material";

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
  }
`;

export const PaginationWrapper = styled(Pagination)`
  button {
    color: ${COLORS.primaryBlue};
    font-size: 20px;
    font-weight: ${FONT_WEIGHT.semiBold};
    font-family: ${FONT_FAMILY.inter};
    min-width: 6px;
    width: 20px;
    max-width: 20px;
    height: 24px;

    &.Mui-selected {
      color: ${COLORS.primaryOrange};
      background-color: transparent;
    }
  }
  svg {
    font-size: 32px;
  }
  & .MuiPaginationItem-ellipsis {
    font-size: 25px;
    color: ${COLORS.primaryBlue};
  }
`;
