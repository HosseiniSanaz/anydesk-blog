import styled from "styled-components"
import Link from "next/link"

const Header = styled.header`
  background-color: ${({theme}) => theme.colors.primary};
  height: 160px;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    height: 130px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${({theme}) => theme.breakpoints.lg}) {
    width: 90%;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    width: 100%;
    padding: 0 16px;
  }
`

const HomeButton = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`
const StyledTitle = styled.h1`
  font-size: ${({theme}) => theme.fontSizes.xxl};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: ${({theme}) => theme.fontSizes.xl};
  }
`
const CreateButton = styled(Link)`
  cursor: pointer;
  background-color: #fafaf9;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSizes.md};
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s;

  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
    color: white;
  }
`

const Main = styled.main`
  width: 80%;
  background-color: #fff;
  margin: 0 auto;
  padding: 16px;
  border-radius: 10px;
  margin-top: -48px;
  margin-bottom: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  min-height: 80vh;

  @media (max-width: ${({theme}) => theme.breakpoints.lg}) {
    width: 90%;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    width: 100%;
    margin-top: -36px;
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }
`

export {Header, Nav, HomeButton, Main, StyledTitle, CreateButton}
