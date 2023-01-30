import { ICarouselType } from "constants/models";

export interface IProps {
  // title?: string;
  // text?: string;
  // textBtn?: string;
  // handleClick?: () => void;
  content?: {
    id?: number;
    title?: string;
    text?: string;
    source?: string;
  }[];
  type?: ICarouselType;
  handleLeaderShipModal?: (index: number) => void;
  // isFromAbout?: boolean;
}
