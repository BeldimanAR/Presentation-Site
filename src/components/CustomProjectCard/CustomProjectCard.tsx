// @ts-nocheck

import { IProps } from "./CustomProjectCardModel";
import * as Styled from "./CustomProjectCardStyled";
import TextAtom from "components/Atoms/CustomText/CustomText";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomProjectCard = (props: IProps) => {
  const {
    title = "",
    text = "",
    source = "",
    type = "",
    path = "",
    isFullWidth = false,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverable, setIsHoverable] = useState(true);
  const [showText, setShowText] = useState(type === "carousel" ? false : true);

  const navigate = useNavigate();

  useEffect(() => {
    setShowText(false);
  }, []);

  const handleExpand = () => {
    if (!isExpanded) {
      setIsHovered(false);
      if (window.location.pathname !== "/") {
        setIsExpanded(true);
      }

      setTimeout(() => {
        setShowText(true);
      }, 500);
    } else {
      setIsExpanded(false);
      setIsHovered(false);
      setIsHoverable(false);
      navigate(`/project/${path}`);
      navigate(0);
      setTimeout(() => {
        setShowText(false);
      }, 200);

      setTimeout(() => {
        setIsHoverable(true);
      }, 1000);
    }
  };

  const wrapperRef = useRef("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Styled.CustomProjectCardContainer
      image={source}
      isExpanded={type === "card" ? true : isExpanded}
      projectCard={type === "card" ? true : false}
      isHovered={isHovered}
      onClick={() => type === "carousel" && handleExpand()}
      onMouseEnter={() => isHoverable && setIsHovered(true)}
      onMouseLeave={() => isHoverable && setIsHovered(false)}
      ref={wrapperRef}
    >
      {((showText && isExpanded) || type === "card") && (
        <Styled.CustomCardTextContainer isExpanded={isExpanded}>
          <TextAtom
            title={title}
            text={text}
            textStyle={isFullWidth ? "projectPage" : "project"}
          />
        </Styled.CustomCardTextContainer>
      )}
    </Styled.CustomProjectCardContainer>
  );
};

export default CustomProjectCard;
