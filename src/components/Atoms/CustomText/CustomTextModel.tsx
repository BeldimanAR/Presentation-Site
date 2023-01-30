import { ICardProjectStyle, ITextStyle } from "constants/models";

export interface IProps {
  title?: string;
  text?: string | any;
  path?: string;
  textStyle?: ITextStyle;
  cardProjectStyle?: ICardProjectStyle;
}

export interface IStyled {
  textStyle: ITextStyle;
}
