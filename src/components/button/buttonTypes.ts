export type ButtonType = "primary" | "secondary" | "success" | "warning" | "danger";
export type RoundedSize = "none" | "sm" | "md" | "lg" | "full";
export type ButtonIcon = "save" | "delete" | "edit" | "download";

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    rounded?: RoundedSize;
    outline?: boolean;
    buttonType?: ButtonType;
}