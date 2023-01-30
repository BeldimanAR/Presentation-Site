// @ts-nocheck
// STYLES
import call from "assets/icons/call.svg";
import email from "assets/icons/email.svg";
import location from "assets/icons/location.svg";
import * as Styled from "./ContactPageStyled";

// LIBRARIES
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// MISC

// COMPONENTS
import ButtonAtom from "components/Atoms/CustomButton/CustomButton";
import { useFormatMessage } from "hooks/useFormatMessage";

const ContactPage = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const form = useRef();

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // GENERAL CONSTANTS
  const infoData = [
    {
      icon: email,
      title: useFormatMessage("emailTitle"),
      text: "office@atlanticpartnersinvestments.com investments@atlanticpartnersinvestments.com",
    },
    {
      icon: call,
      title: useFormatMessage("callTitle"),
      text: "+4079823759",
    },
    {
      icon: location,
      title: useFormatMessage("visitTitle"),
      text: "Calea Floreasca 165, etaj 6, One Tower, Sector 1, Bucharest 014459",
    },
  ];

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    if (
      inputData.email !== "" &&
      inputData.message !== "" &&
      inputData.phone !== "" &&
      inputData.name !== ""
    ) {
      emailjs
        .sendForm(
          "service_ru1dwab",
          "template_lz7p9j3",
          form.current,
          "ArChZ_CwKk9ChM1bW"
        )
        .then(
          (result) => {
            setInputData({
              name: "",
              email: "",
              message: "",
              phone: "",
            });
          },
          (error) => {
            setInputData({
              name: "",
              email: "",
              message: "",
              phone: "",
            });
          }
        );
    }
  };

  return (
    <Styled.ContactPageContainer>
      <Styled.TitleContainer>
        {useFormatMessage("contactTitle")}
      </Styled.TitleContainer>

      <Styled.InputWrapper display="flex">
        <Styled.ContactInfoContainer>
          {infoData.map((item, index) => {
            return (
              <Styled.DetailContainer
                key={`"info-data-${item.title}--${index}"`}
              >
                <Styled.CredentialWrapper>
                  <Styled.SubtitleContainer>
                    <Styled.IconWrapper>
                      <Styled.Icon src={item.icon} />
                    </Styled.IconWrapper>
                    {item.title}
                  </Styled.SubtitleContainer>

                  <Styled.TextContainer>{item.text}</Styled.TextContainer>
                </Styled.CredentialWrapper>
              </Styled.DetailContainer>
            );
          })}
          <Styled.DetailContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.4323477280705!2d26.0995263655243!3d44.4653098791019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4c843854a7%3A0xc9a51c1bd8174fce!2sONE%20Tower!5e0!3m2!1sen!2sro!4v1667908927077!5m2!1sen!2sro"
              width="540"
              height="345"
              loading="lazy"
            />
          </Styled.DetailContainer>
        </Styled.ContactInfoContainer>

        <Styled.InputContainer ref={form} onSubmit={handleSubmit}>
          <Styled.NameNumberWrapper>
            <Styled.InputWrapper width={"45%"}>
              <Styled.LabelInput>
                {useFormatMessage("nameLabel")}
              </Styled.LabelInput>
              <Styled.Input
                placeholder={useFormatMessage("basicPlaceholder")}
                name="name"
                value={inputData["name"]}
                onChange={(event) => {
                  setInputData({
                    ...inputData,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper width={"45%"}>
              <Styled.LabelInput>
                {useFormatMessage("phoneLabel")}
              </Styled.LabelInput>
              <Styled.Input
                placeholder={useFormatMessage("basicPlaceholder")}
                value={inputData["phone"]}
                name="phone"
                onChange={(event) => {
                  setInputData({
                    ...inputData,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </Styled.InputWrapper>
          </Styled.NameNumberWrapper>

          <Styled.InputWrapper width={"100%"}>
            <Styled.LabelInput>
              {useFormatMessage("emailLabel")}
            </Styled.LabelInput>
            <Styled.Input
              placeholder={useFormatMessage("basicPlaceholder")}
              width={"100%"}
              value={inputData["email"]}
              name="email"
              onChange={(event) => {
                setInputData({
                  ...inputData,
                  [event.target.name]: event.target.value,
                });
              }}
            ></Styled.Input>
          </Styled.InputWrapper>

          <Styled.InputWrapper width={"100%"}>
            <Styled.LabelInput>
              {useFormatMessage("messageLabel")}
            </Styled.LabelInput>

            <Styled.TextArea
              // type="text"
              placeholder={useFormatMessage("messagePlaceholder")}
              width={"100%"}
              height={"160px"}
              rows={5}
              value={inputData["message"]}
              name="message"
              onChange={(event) => {
                setInputData({
                  ...inputData,
                  [event.target.name]: event.target.value,
                });
              }}
            ></Styled.TextArea>
          </Styled.InputWrapper>
          <Styled.SubmitButtonContainer>
            <Styled.SubmitButton>
              <ButtonAtom
                buttonStyle="contactUs"
                text={useFormatMessage("sendButtonText")}
                handleClick={handleSubmit}
              />
            </Styled.SubmitButton>
          </Styled.SubmitButtonContainer>
        </Styled.InputContainer>
      </Styled.InputWrapper>
    </Styled.ContactPageContainer>
  );
};

export default ContactPage;
