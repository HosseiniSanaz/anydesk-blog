import {NotFoundContainer, NotFoundMessage, NotFoundTitle, HomeButton} from "./styles";
import Image from "next/image";

function NotFound({message}: { message: string }) {
    return (
        <NotFoundContainer>
            <Image src="/not-found.avif" alt="not found" width={200} height={200}/>
            <NotFoundTitle>Page Not Found</NotFoundTitle>
            <NotFoundMessage>{message}</NotFoundMessage>
            <HomeButton href="/">Go to Home</HomeButton>
        </NotFoundContainer>
    )
}

export default NotFound;
