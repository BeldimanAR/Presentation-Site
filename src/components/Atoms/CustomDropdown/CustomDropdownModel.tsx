import { IDropdownType } from "constants/models";

export type ISelectOption = {
  label: string;
  value: string | number;
};

export interface IProps {
  placeholder?: string;
  value?: ISelectOption;
  options: ISelectOption[];
  onChange?: (value: ISelectOption | undefined) => void;
  icon?: string;
  dropdownArrow?: string;
  dropdownStyle?: IDropdownType;
}
