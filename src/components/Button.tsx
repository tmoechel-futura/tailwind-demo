
import React from "react";
import clsx from "clsx";


type ButtonType = "primary" | "secondary" | "success" | "warning" | "danger";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    rounded?: boolean,
    outline?: boolean
    buttonType?: ButtonType,
    buttonClick?: () => void,
}

export default function Button({
    children,
    buttonType = "primary",
    rounded,
    outline,
    ...rest
}: IButtonProps): React.ReactElement {

    const baseStyles: Record<ButtonType, string> = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-black hover:bg-yellow-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };

    // outline variants (inherit color)
    const outlineStyles: Record<ButtonType, string> = {
        primary: "border border-blue-500 text-blue-500 hover:bg-blue-50",
        secondary: "border border-gray-500 text-gray-500 hover:bg-gray-50",
        success: "border border-green-500 text-green-500 hover:bg-green-50",
        warning: "border border-yellow-500 text-yellow-600 hover:bg-yellow-50",
        danger: "border border-red-500 text-red-500 hover:bg-red-50",
    };

    const commonStyles = "px-4 py-2 font-medium transition-colors";

    return (
        <div className="flex flex-col gap-2 w-36">
            <button
                {...rest}
                className={clsx(
                    commonStyles,
                    outline ? outlineStyles[buttonType] : baseStyles[buttonType],
                    rounded ? "rounded-lg" : ""
                )}>
                {children}
            </button>
        </div>
    )
}