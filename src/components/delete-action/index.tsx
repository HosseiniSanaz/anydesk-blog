import IDeleteActionProps from "./delete-action.type";
import ConfirmationModal from "@/components/ui/confirmation-modal";
import {useCallback, useState} from "react";
import useStore from "@/store/useStore";
import useToast from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import IconButton from "@/components/ui/icon-button";

function DeleteAction({postId}: IDeleteActionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const {deletePost} = useStore();
    const {addToast} = useToast();
    const router = useRouter();


    const handleDelete = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        setIsOpen(true);
    }, [])

    const onClose = useCallback((e?: React.MouseEvent<HTMLButtonElement>): void => {
        e?.preventDefault();
        setIsOpen(false);
    }, [])

    const onConfirmDelete = useCallback((e?: React.MouseEvent<HTMLButtonElement>): void => {
        e?.preventDefault();
        deletePost(postId)
        setIsOpen(false);
        addToast('success', 'Post deleted successfully');
        router.push('/');
    }, [deletePost, postId, addToast, router])

    return (
        <>
            <IconButton icon="delete" onClick={handleDelete} dataTestId="delete-action"/>
            <ConfirmationModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={onConfirmDelete}
                title="Delete Post"
                message="Are you sure you want to delete this post?"
            />
        </>
    )
}

export default DeleteAction;
