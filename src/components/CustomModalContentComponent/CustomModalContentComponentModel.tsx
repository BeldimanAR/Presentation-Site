import { ReactNode } from "react";

export interface IProps {
  image?: string;
  title?: string;
  subtitle?: string;
  text?: string | any;
  onClickCloseModal?: () => void;
  modalContent?: {
    name?: string;
  };
}
