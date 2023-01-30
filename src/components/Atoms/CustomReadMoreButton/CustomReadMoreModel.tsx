import { IButtonStyle } from "constants/models";
export interface IProps {
  text: string;
  handleClick: () => void;
  buttonStyle?: IButtonStyle;
  isSelected?: boolean;

  //TODO: make this a type with 2 style options 'primary' and 'secondary'
}

export interface IStyled {
  buttonStyle: IButtonStyle;
  isSelected?: boolean;
  //TODO: make this a type with 2 style options 'primary' and 'secondary'
}
