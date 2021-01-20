import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: var(--white);
`;

export const ContainerNav = styled.div`
  width: 100%;
`;

export const RootModal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ContainerModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.51);
  z-index: 400;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.div`
  border: 1px solid red;
  height: 10%;
  display: flex;
  justify-content: flex-end;
`;

export const BottonModalClose = styled.div`
  border: 1px solid red;
  width: 20px;
`;

interface ModalProps {
  parameter?: ModalContentProps;
}

export interface ModalContentProps {
  width?: string;
  height?: string;
}

const appearFronBackgroud = keyframes`
  from {
    opacity: 0;
    background-color: #fff;
    border: 1px solid #ccc;

  }
  to {
    opacity: 1;
    border: none;
  }
`;

export const ModalContent = styled.div<ModalProps>`
  position: absolute;

  width: 30%;
  height: 30%;

  ${props =>
    props.parameter?.width &&
    css`
      width: ${props.parameter?.width};
    `}

  ${props =>
    props.parameter?.height &&
    css`
      height: ${props.parameter?.height};
    `}



  background: #fff;
  animation: ${appearFronBackgroud} 1s ease-out;

  z-index: 500;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray);
`;

export const ContainerFooter = styled.div`
  height: 50px;
  width: 100%;

  border: 1px solid red;
`;
