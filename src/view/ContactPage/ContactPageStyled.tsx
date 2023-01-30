import styled, { css } from "styled-components";
import {
  FONT_SIZE,
  FONT_FAMILY,
  FONT_WEIGHT,
  COLORS,
  DEVICE_SIZE,
  FIX_SPACING,
  SPACING,
} from "../../constants/variables";
import { StyledProps } from "./ContactPageModel";

export const ContactPageContainer = styled.div`
  padding: ${SPACING.max120} ${SPACING.max110};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.p`
  font-size: ${FONT_SIZE.max40};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${COLORS.primaryBlue};
  border-bottom: 1px solid ${COLORS.primaryBlue};
  width: 48.5%;
  margin-bottom: ${SPACING.max100};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    margin: 0;
    padding-bottom: ${FIX_SPACING.max40};
    text-align: center;
    width: 100%;
    border: none;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
`;

export const ContactInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: ${FIX_SPACING.max40};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const DetailContainer = styled.div`
  width: 45%;
  min-width: 45%;
  display: flex;

  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
  }
  &:nth-child(3) {
    width: 28%;
    min-width: 28%;
  }

  iframe {
    box-shadow: 0px 5px 10px #0000001a;
    border: none;
    border-radius: 10px;
    min-width: 540px;
    @media (max-width: 1550px) {
      min-width: 440px;
    }
  }

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    justify-content: center;
    align-items: center;
    &:nth-child(2) {
      justify-content: center;
    }
    &:nth-child(3) {
      width: 100%;
    }
    iframe {
      box-shadow: 0px 5px 10px #0000001a;
      border: none;
      border-radius: 10px;
      min-width: 240px;
      width: 100%;
      max-width: 600px;
      min-height: 400px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: ${SPACING.max20};
`;

export const Icon = styled.img`
  width: 29px;
  height: 20px;
`;

export const CredentialWrapper = styled.div``;

export const SubtitleContainer = styled.div`
  display: flex;
  font-size: ${FONT_SIZE.max24v18};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${COLORS.primaryBlue};
  margin-bottom: ${FIX_SPACING.max10};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;

export const TextContainer = styled.p`
  font-size: ${FONT_SIZE.max18v15};
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${COLORS.primaryBlack};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    text-align: center;
  }
`;

export const InputContainer = styled.form`
  width: 50%;
  padding-left: 90px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACING.max40};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 100%;
    text-align: center;
    padding: ${FIX_SPACING.max60} 0px 0px 0px;
    display: flex;
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div<{
  width?: string;
  display?: string;
  justify?: string;
}>(
  ({ width = "", display = "", justify = "" }) => css`
    ${width && `width: ${width};`}
    ${display && `display: ${display};`}
    ${justify && `justify-content: ${justify};`}

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `
);
export const NameNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${FIX_SPACING.max20};
  }
`;

export const Input = styled.input<{
  height?: string;
}>(
  ({ height = "" }) => css`
    width: 100%;
    height: ${height ? height : "40px"};
    border-radius: 5px;
    border: 1px solid ${COLORS.primaryDarkBlue};
    background-color: transparent;
    box-sizing: border-box;
    padding: 0 ${FIX_SPACING.max15};
    font-family: ${FONT_FAMILY.inter};
    font-weight: ${FONT_WEIGHT.regular};
    margin-top: ${FIX_SPACING.max10};
    &:focus {
      outline-width: 0;
    }
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      height: ${FIX_SPACING.max40};
    }
  `
);

export const TextArea = styled.textarea<{
  width: string;
  height: string;
}>(
  ({ width = "", height = "" }) => css`
    width: ${width};
    height: ${height ? height : "50px"};
    border-radius: 5px;
    border: 1px solid ${COLORS.primaryDarkBlue};
    background-color: transparent;
    box-sizing: border-box;
    padding: ${FIX_SPACING.max15};
    font-family: ${FONT_FAMILY.inter};
    font-weight: ${FONT_WEIGHT.regular};
    resize: none;
    margin-top: ${FIX_SPACING.max10};
    &:focus {
      outline-width: 0;
    }
  `
);
export const LabelInput = styled.p`
  font-family: ${FONT_FAMILY.inter};
  font-weight: ${FONT_WEIGHT.semiBold};
  color: ${COLORS.primaryBlack};
  font-size: ${FONT_SIZE.max20};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    text-align: left;
  }
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    justify-content: center;
    border-radius: 4px;
  }
`;
export const SubmitButton = styled.div`
  width: 180px;
  height: 40px;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 160px;
    height: 40px;
  }
`;
