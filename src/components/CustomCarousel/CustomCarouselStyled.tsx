import styled, { css } from "styled-components";

export const CardsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled.div<{ index: number }>(
  ({ index }) => css`
    display: flex;

    align-items: ${index % 2 === 0 ? "flex-end" : "flex-start"};
    height: 100%;
  `
);
