import styled, {css} from "styled-components"
import IButtonProps from "./button.type"

const StyledButton = styled.button<IButtonProps>`
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;

  ${props => props.variant === "primary" && css`
    background: ${({theme}) => theme.colors.secondary};
    color: white;

    &:hover:not(:disabled) {
      background: ${({theme}) => theme.colors.secondary};
      filter: brightness(0.9);
    }
  `}

  ${props => props.variant === "secondary" && css`
    background: ${({theme}) => theme.colors.muted};
    color: #111827;


    &:hover:not(:disabled) {
      background: ${({theme}) => theme.colors.secondary};
      color: white;
    }
  `}

  ${props => props.variant === "muted" && css`
    background: ${({theme}) => theme.colors.muted};
    color: ${({theme}) => theme.colors.text};

    &:hover:not(:disabled) {
      background: #e5e7eb;
    }
  `}

  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${props => props.loading && css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      border: 2px solid;
      border-radius: 50%;
      border-color: currentColor currentColor currentColor transparent;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;

export {StyledButton}
