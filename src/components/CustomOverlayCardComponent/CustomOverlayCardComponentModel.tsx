import { ICardType } from "constants/models";
export interface IProps {
  cardOverlay?: ICardType;
  text?: string;
  icon?: string;
  iconTitle?: string;
  image?: string;
  onClick?: () => {};
}

export interface IStyled {
  cardOverlay: ICardType;
}
