import NotFound from "@/components/not-found";

export default function NotFoundPage({error}: { error: string }) {
    return (
        <NotFound message={error}/>
    )
}
