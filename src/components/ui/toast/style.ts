import styled from "styled-components";
import { keyframes } from "styled-components";

const slideIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ToastMessage = styled.div<{ type?: string }>`
  background-color: ${props => {
    switch (props.type) {
      case 'success':
        return props.theme.colors.success;
      case 'error':
        return props.theme.colors.error;
      case 'warning':
        return props.theme.colors.warning;
      default:
        return props.theme.colors.info;
    }
  }};
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
  margin: 10px;
  opacity: 0;
  transform: translateY(100%);
  animation: ${slideIn} 0.3s ease forwards;
  
  &.fade-out {
    animation: ${fadeOut} 0.3s ease forwards;
  }
`;

export { ToastContainer, ToastMessage };