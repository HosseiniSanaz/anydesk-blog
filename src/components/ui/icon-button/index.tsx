import { Button } from "./icon-button.style";
import IIconButtonProps from "./icon-button.type";

function IconButton({icon, onClick, children}: IIconButtonProps) {
    return (
        <Button onClick={onClick}>
            <span className="material-icons">{icon}</span>
            {children}
        </Button>
    )
}

export default IconButton;