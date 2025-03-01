import styled, {css} from "styled-components"

const StyledButton = styled.button<{ $variant?: string; $loading?: boolean; $disabled?: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    font-size: ${({theme}) => theme.fontSizes.sm};
  }

  ${props => props.$variant === "primary" && css`
    background: ${({theme}) => theme.colors.secondary};
    color: white;

    &:hover:not(:disabled) {
      background: ${({theme}) => theme.colors.secondary};
      filter: brightness(0.9);
    }
  `}

  ${props => props.$variant === "secondary" && css`
    background: ${({theme}) => theme.colors.muted};
    color: ${({theme}) => theme.colors.text};


    &:hover:not(:disabled) {
      background: ${({theme}) => theme.colors.secondary};
      color: white;
    }
  `}

  ${props => props.$variant === "muted" && css`
    background: ${({theme}) => theme.colors.muted};
    color: ${({theme}) => theme.colors.text};
    border: 1px solid ${({theme}) => theme.colors.border};

    &:hover:not(:disabled) {
      background: ${({theme}) => theme.colors.border};
    }
  `}

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${props => props.$loading && css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    opacity: 0.5;

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
