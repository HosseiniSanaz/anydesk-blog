import styled from "styled-components"
import Link from "next/link"

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary}; 
  height: 160px;
  @media (max-width: 768px) {
    height: 130px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`
const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`

const Main = styled.main`
  max-width: 1200px;
  width: 70%;
  background-color: #fff;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  margin-top: -48px;
  margin-bottom: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
     margin-top: -36px;
  }
`

export { Header, Nav, StyledLink, Main, StyledTitle }