import { DeleteButton } from "./styles";
import IDeleteActionProps from "./delete-action.type";
import ConfirmationModal from "@/components/ui/confirmation-modal";
import { useState } from "react";
import useStore from "@/store/useStore";

function DeleteAction({ postId }: IDeleteActionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { deletePost } = useStore();

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        setIsOpen(true);
    }

    const onClose = (e?: React.MouseEvent<HTMLButtonElement>): void => {
        e?.preventDefault();
        setIsOpen(false);
    }
    
    const onConfirmDelete = (e?: React.MouseEvent<HTMLButtonElement>): void => {
        e?.preventDefault();
        deletePost(postId)
        setIsOpen(false);
    }

    return (
        <>
            <DeleteButton onClick={handleDelete}>
                <span className="material-icons">delete</span>
            </DeleteButton>
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