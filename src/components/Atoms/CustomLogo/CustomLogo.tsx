import React from "react";

import * as Styled from "./CustomLogoStyled";
import { IProps } from "./CustomLogoModel";
import logoDark from "assets/atomsAssets/logoDark.svg";
import logoLight from "assets/atomsAssets/logoLight.svg";
import logoGray from "assets/atomsAssets/logoGray.svg";

const LogoAtom = (props: IProps) => {
  const { type = "dark" } = props;
  return (
    <Styled.LogoContainer>
      <Styled.LogoImage
        src={
          type === "dark" ? logoDark : type === "light" ? logoLight : logoGray
        }
        alt="logo"
      />
    </Styled.LogoContainer>
  );
};

export default LogoAtom;
