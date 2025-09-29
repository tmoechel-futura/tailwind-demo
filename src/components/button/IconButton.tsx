
import React from "react";
import clsx from "clsx";

import {
    BookmarkSquareIcon as BookmarkSquareSolid,
    PencilSquareIcon as PencilSquareSolid,
    TrashIcon as TrashSolid,
    ArrowDownTrayIcon as ArrowDownTraySolid,
} from "@heroicons/react/24/solid";

import {
    BookmarkSquareIcon as BookmarkSquareOutline,
    PencilSquareIcon as PencilSquareOutline,
    TrashIcon as TrashOutline,
    ArrowDownTrayIcon as ArrowDownTrayOutline, // outline variant
} from "@heroicons/react/24/outline";

import type { BaseButtonProps, ButtonIcon } from "./buttonTypes";
import { baseStyles, iconButtonCommonStyles, outlineStyles, roundedStyles } from "./buttonStyles";


interface IIconButtonProps extends BaseButtonProps {
    buttonIcon?: ButtonIcon
}

const iconMapSolid: Record<ButtonIcon, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    save: BookmarkSquareSolid,
    delete: TrashSolid,
    edit: PencilSquareSolid,
    download: ArrowDownTraySolid,
};

const iconMapOutline: Record<ButtonIcon, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    save: BookmarkSquareOutline,
    delete: TrashOutline,
    edit: PencilSquareOutline,
    download: ArrowDownTrayOutline,
};

export default function IconButton({
    children,
    buttonType = "primary",
    rounded,
    outline,
    buttonIcon,
    ...rest }: IIconButtonProps): React.ReactElement {

    const Icon = buttonIcon ? (outline ? iconMapOutline[buttonIcon] : iconMapSolid[buttonIcon]) : null;

    return (
        <div className="flex flex-col gap-2 w-40">
            <button
                {...rest}
                className={clsx(
                    iconButtonCommonStyles,
                    outline ? outlineStyles[buttonType] : baseStyles[buttonType],
                    rounded && roundedStyles[rounded],
                    rest.className, // include any className passed via props
                )}>
                {Icon && <Icon className="h-5 w-5 mr-2" aria-hidden="true" />}
                {children}
            </button>
        </div>
    )
}