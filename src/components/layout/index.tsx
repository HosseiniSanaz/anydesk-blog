import type React from "react"
import { Header, Nav, HomeButton, Main, StyledTitle, CreateButton } from "./styles"
import ILayoutProps from "./layout.type"


const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header>
                <Nav>
                    <HomeButton href="/">
                        <StyledTitle>Anydesk Blog</StyledTitle>
                    </HomeButton>
                    <CreateButton href="/create">
                        <span className="material-icons">add</span>
                        Create Post
                    </CreateButton>
                </Nav>
            </Header>
            <Main>{children}</Main>
        </>
    )
}

export default Layout

