import { ITextStyle, IButtonStyle } from "constants/models";

export interface IProps {
  title?: string;
  text?: string | any;
  buttonText?: string;
  handleClick?: () => void;
  textStyle?: ITextStyle;
  buttonStyle?: IButtonStyle;
}
