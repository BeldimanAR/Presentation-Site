import { ReactElement } from "react";

type IWrapperType = "fullWidth" | "halfWidth";

export interface IProps {
  title?: string;
  topLine?: IWrapperType;
  bottomLine?: IWrapperType;
  firstChild?: ReactElement;
  secondChild?: ReactElement;
}
