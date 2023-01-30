import { IProps as ITextAtomProps } from "components/Atoms/CustomText/CustomTextModel";

export interface IProps extends ITextAtomProps {
  source?: string;
  path?: string;
  type?: string;
  projectCard?: string;
  isFullWidth?: boolean;
}
