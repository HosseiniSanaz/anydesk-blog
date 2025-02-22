import {DeleteButton} from "./styles";
import IDeleteActionProps from "./delete-action.type";
import ConfirmationModal from "@/components/ui/confirmation-modal";
import {useState} from "react";
import useStore from "@/store/useStore";
import {useToast} from "../toast-provider";

function DeleteAction({postId}: IDeleteActionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const {deletePost} = useStore();
    const {addToast} = useToast();

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
        addToast('success', 'Post deleted successfully');
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
