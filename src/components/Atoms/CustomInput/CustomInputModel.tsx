import { BaseTextFieldProps } from "@mui/material";
import { IInputStyle } from "constants/models";

export interface IProps extends BaseTextFieldProps {
  inputStyle?: IInputStyle;
}

export interface IStyled {
  inputStyle?: IInputStyle;
  width?: string;
}
