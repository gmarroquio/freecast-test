import styled from "styled-components";
import { colors } from "../../sytle/theme";

export const ModalContainer = styled.div.attrs<{
  $isOpen: boolean;
  $display?: "flex" | "none";
}>((props) => ({
  $display: props.$isOpen ? "flex" : "none",
}))`
  display: ${(props) => props.$display};
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  left: 0;
  height: 100vh;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  z-index: 1;
`;

export const ModalContent = styled.div`
  border: 1px solid ${colors.blue};
  padding: 1rem 0.5rem;
  background: ${colors.black};
  border-radius: 1rem;
  height: 33vh;
  width: 33vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTopBar = styled.div`
  text-transform: capitalize;
`;

export const ModalSectionContainer = styled.section`
  text-align: center;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
`;

export const ModalButton = styled.button.attrs<{
  $selected?: boolean;
  $bg?: string;
  $fg?: string;
}>((props) => ({
  $bg: props.$selected ? colors.white : colors.black,
  $fg: props.$selected ? colors.blue : colors.white,
}))`
  border: 1px solid ${colors.blue};
  border-radius: 0.4rem;
  background: ${(props) => props.$bg};
  color: ${(props) => props.$fg};
  padding: 0.25rem 0.75rem;
  transition: 200ms;
  text-transform: capitalize;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  & + & {
    margin-left: 1rem;
  }
`;
