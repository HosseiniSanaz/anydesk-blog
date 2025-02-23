import Button from "../ui/button";
import { useRouter } from "next/router";
import Image from "next/image";
import { EmptyContainer, EmptyMessage, EmptyTitle } from "./styles";

function Empty() {
    const router = useRouter();
    return (
        <EmptyContainer>
            <EmptyTitle>Nothing shared yet</EmptyTitle>
            <Image src="/empty.png" alt="Empty" width={200} height={200} />
            <EmptyMessage>Be the first to share your thoughts and ideas.</EmptyMessage>
            <Button variant="primary" onClick={() => router.push("/create")}>Share your thoughts</Button>
        </EmptyContainer>
    )
}

export default Empty;