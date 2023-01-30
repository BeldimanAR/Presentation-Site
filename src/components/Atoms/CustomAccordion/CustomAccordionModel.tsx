export interface IProps {
  title?: string;
  content?: string | any;
  dropdownArrow?: string;
  isOpen?: boolean;
  handleToggle?: (number: any) => void;
}
