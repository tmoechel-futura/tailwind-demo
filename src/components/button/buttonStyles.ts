import type { ButtonType, RoundedSize } from "./buttonTypes";

export const baseStyles: Record<ButtonType, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
};

// outline variants (inherit color)
export const outlineStyles: Record<ButtonType, string> = {
    primary: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    secondary: "border border-gray-500 text-gray-500 hover:bg-gray-50",
    success: "border border-green-500 text-green-500 hover:bg-green-50",
    warning: "border border-yellow-500 text-yellow-600 hover:bg-yellow-50",
    danger: "border border-red-500 text-red-500 hover:bg-red-50",
};

export const roundedStyles: Record<RoundedSize, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
};

export const iconButtonCommonStyles = "px-4 py-2 font-medium transition-colors flex items-center justify-center";