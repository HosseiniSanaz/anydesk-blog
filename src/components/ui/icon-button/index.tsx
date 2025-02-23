import { Button } from "./icon-button.style";
import IIconButtonProps from "./icon-button.type";

function IconButton({icon, onClick, children, dataTestId}: IIconButtonProps) {
    return (
        <Button onClick={onClick} data-testid={dataTestId}>
            <span className="material-icons">{icon}</span>
            {children}
        </Button>
    )
}

export default IconButton;