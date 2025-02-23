import {NotFoundContainer, NotFoundMessage, HomeButton} from "./styles";
import Image from "next/image";

function NotFound({message}: { message: string }) {
    return (
        <NotFoundContainer>
            <Image src="/not-found.webp" alt="not found" width={200} height={200}/>
            <NotFoundMessage>{message}</NotFoundMessage>
            <HomeButton href="/">Go to Home</HomeButton>
        </NotFoundContainer>
    )
}

export default NotFound;
