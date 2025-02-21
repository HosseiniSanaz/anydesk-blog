import type React from "react"
import { Header, Nav, StyledLink, Main, StyledTitle } from "./styles"
import ILayoutProps from "./layout.type"


const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header>
                <Nav>
                    <StyledLink href="/">
                        <StyledTitle>Anydesk Blog</StyledTitle>
                    </StyledLink>
                    <StyledLink href="/create">Create Post</StyledLink>
                </Nav>
            </Header>
            <Main>{children}</Main>
        </>
    )
}

export default Layout

