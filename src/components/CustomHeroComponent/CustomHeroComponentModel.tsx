import { IProps as ITextAtomProps } from "components/Atoms/CustomText/CustomTextModel";
import { IProps as ITextComponentProps } from "components/CustomTextComponent/CustomTextComponentModel";

type IHeroType = "primary" | "secondary";
export interface IProps extends ITextAtomProps, ITextComponentProps {
  imgSrc?: string;
  type?: IHeroType;
}
