// LIBRARIES
import styled, { css } from "styled-components";
import { TextField } from "@mui/material";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
} from "constants/variables";

// MISC
import { IStyled } from "components/Atoms/CustomInput/CustomInputModel";

export const InputComponent = styled(TextField)<IStyled>(
  ({ inputStyle }) => css`
    && {
      ${inputStyle === "primary" &&
      css`
        & .MuiFormLabel-root {
          font-size: ${FONT_SIZE.max24};
          padding: 6px 0;
          color: ${COLORS.primaryDarkBlue};
        }
        & .Mui-focused {
          color: ${COLORS.primaryLightBlue};
        }

        & .MuiInputBase-input {
          font-weight: ${FONT_WEIGHT.bold};
          font-size: ${FONT_SIZE.max24};
          font-family: ${FONT_FAMILY.inter};
          color: ${COLORS.primaryDarkBlue};
        }

        & .MuiInputBase-root {
          &::before {
            border-width: 2px;
            border-color: ${COLORS.primaryDarkBlue};
          }
          &::after {
            border-width: 2px;
            border-color: ${COLORS.primaryLightBlue};
          }
        }
      `}
      ${inputStyle === "secondary" &&
      css`
        background-color: ${COLORS.secondaryPurple};
      `}
    }
  `
);

export const InputComponentWrapper = styled.div<IStyled>`
  width: 100%;
  height: 100%;
`;
