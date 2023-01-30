import { useEffect, useState } from "react";

import * as Styled from "./CustomDropdownStyled";

import { IProps, ISelectOption } from "./CustomDropdownModel";

const DropdownAtom = (props: IProps) => {
  const {
    value = {
      value: "",
      label: "",
    },
    options = [],
    placeholder = "",
    icon = "",
    dropdownArrow = "",
    dropdownStyle = "",
    onChange = () => {},
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(-1);
  }, [isOpen]);

  const selectOption = (option: ISelectOption) => {
    if (option?.value !== value?.value) onChange(option);
  };

  const isOptionSelected = (option: ISelectOption) => {
    return option?.value == value?.value;
  };

  return (
    <Styled.DropdownContainer
      tabIndex={0}
      onClick={() => setIsOpen((prevState) => !prevState)}
      onBlur={() => setIsOpen(false)}
      dropdownStyle={dropdownStyle}
    >
      <Styled.DropdownIcon src={icon} alt="" dropdownStyle={dropdownStyle} />
      <Styled.DropdownValue dropdownStyle={dropdownStyle}>
        {value?.label ? value?.label : placeholder}
      </Styled.DropdownValue>
      <Styled.DropdownArrow
        src={dropdownArrow}
        alt=""
        isOpen={isOpen}
        dropdownStyle={dropdownStyle}
      />
      {isOpen && (
        <Styled.DropdownList isOpen={isOpen}>
          {options?.map((option, index) => (
            <Styled.DropdownOption
              key={option.value}
              onClick={(event) => {
                event.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              selectedOption={isOptionSelected(option)}
              highlightedOption={highlightedIndex === index}
            >
              {option.label}
            </Styled.DropdownOption>
          ))}
        </Styled.DropdownList>
      )}
    </Styled.DropdownContainer>
  );
};

export default DropdownAtom;
