import { IProps } from "./CustomAccordionModel";
import * as Styled from "./CustomAccordionStyled";

const AccordionAtom = (props: IProps) => {
  const {
    title = "",
    content = "",
    dropdownArrow = "",
    isOpen = false,
    handleToggle = () => {},
  } = props;

  return (
    <Styled.AccordionContainer>
      <Styled.AccordionTitleWrapper
        tabIndex={0}
        onClick={(id) => handleToggle(id)}
        isOpen={isOpen}
      >
        <Styled.AccordionTitle>{title}</Styled.AccordionTitle>
        {content && (
          <Styled.AccordionArrow src={dropdownArrow} isOpen={isOpen} />
        )}
      </Styled.AccordionTitleWrapper>
      <Styled.AccordionContentContainer isOpen={isOpen}>
        <Styled.AccordionContent>{content}</Styled.AccordionContent>
      </Styled.AccordionContentContainer>
      <Styled.AccordionBorder isOpen={isOpen} />
    </Styled.AccordionContainer>
  );
};

export default AccordionAtom;

//* TO BE ADDED INTO PARENT COMPONENT FOR ACCORDION STATE *
// const [isOpen, setIsOpen] = useState(null);
// const handleAccordion = (id) => {
//   setIsOpen((prevState) => (prevState === id ? null : id));
// };

//* WHEN USED SHOULD LOOK LIKE THIS *
{
  /* <AccordionAtom
                title={item.title}
                content={item.text}
                dropdownArrow={dropdownArrow}
                isOpen={isOpen === index}
                handleToggle={() => handleAccordion(index)}
              /> */
}
