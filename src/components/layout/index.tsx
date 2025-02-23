import type React from "react"
import {CreateButton, Header, HomeButton, Main, Nav, StyledTitle} from "./styles"
import ILayoutProps from "./layout.type"
import {useIsMobile} from "@/hooks/useIsMobile"
import { usePathname } from "next/navigation"

const Layout: React.FC<ILayoutProps> = ({children}) => {
    const isMobile = useIsMobile();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <>
            <Header $isHomePage={isHomePage}>
                <Nav>
                    <HomeButton href="/">
                        <StyledTitle>Anydesk Blog</StyledTitle>
                    </HomeButton>
                    <CreateButton href="/create">
                        <span className="material-icons">add</span>
                        {isMobile ? 'Create' : 'Create Post'}
                    </CreateButton>
                </Nav>
            </Header>
            <Main $isHomePage={isHomePage}>{children}</Main>
        </>
    )
}

export default Layout

