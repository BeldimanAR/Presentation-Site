import { ITitleStyle } from "constants/models";

export interface IProps {
  title: string;
  subtitle?: string;
  titleStyle?: ITitleStyle;
  subtitleStyle?: ITitleStyle;
}

export interface IStyled {
  titleStyle: ITitleStyle;
}
