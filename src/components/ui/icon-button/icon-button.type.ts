interface IIconButtonProps {
    children?: React.ReactNode;
    icon: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    dataTestId?: string;
}

export default IIconButtonProps;
