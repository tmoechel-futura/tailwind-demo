
import React from "react";
import clsx from "clsx";
import type { BaseButtonProps } from "./buttonTypes";
import { baseStyles, outlineStyles, roundedStyles } from "./buttonStyles";

// extend from ButtonHTMLAttributes to get all native button props (like onClick, onMouseMove, etc)
interface IButtonProps extends BaseButtonProps { }

export default function Button({
    children,
    buttonType = "primary",
    rounded,
    outline,
    ...rest // rest operator to capture all other props
}: IButtonProps): React.ReactElement {

    const commonStyles = "px-4 py-2 font-medium transition-colors";

    return (
        <div className="flex flex-col gap-2 w-36">
            <button
                {...rest}
                className={clsx(
                    commonStyles,
                    outline ? outlineStyles[buttonType] : baseStyles[buttonType],
                    rounded && roundedStyles[rounded],
                    rest.className, // include any className passed via props
                )}>
                {children}
            </button>
        </div>
    )
}