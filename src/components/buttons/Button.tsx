import React, {useState} from "react";

//TODO: for props use type ||
interface ButtonProps {
    name?: string;
    onClick?: (event: any) => void;
    disabled?: boolean;
    className?: string;
    hasLoading?: boolean;
    style?: React.CSSProperties;
    variant?: "primary" | "secondary" | "tertiary" | "quaternary" | null | undefined | string;
    type?: "button" | "reset" | "submit" | undefined;
    id?: string;
    buttonStyle?: object;
    children?:React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
                                           name,
                                           onClick = null,
                                           disabled = false,
                                           className,
                                           hasLoading = false,
                                           style = {},
                                           variant,
                                           children,
                                           type,
                                           id,
                                           buttonStyle,
                                       }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const themeColor = {
        primary: "#FF5612",
        secondary: "#010101",
        tertiary: "#FFF3F0",
        quaternary: "#F6F6F6",
    }

    const buttonStyles: React.CSSProperties = {

        backgroundColor: disabled || isLoading || hasLoading ? "#DBDBDB" :
            variant === "primary"
                ? themeColor.primary
                : variant === "secondary"
                    ? themeColor.secondary : variant === "tertiary" ? themeColor.tertiary
                        : variant === "quaternary" ? themeColor.quaternary : "#FFFFFF", // Use the backgroundColor prop as the background color
        color: disabled || isLoading || hasLoading ? "#FFFFFF" :
            variant === "primary"
                ? "#FFFFFF"
                : variant === "secondary"
                    ? "#FFFFFF" : variant === "tertiary" ? themeColor.primary
                        : "#010101",
        border: disabled || isLoading || hasLoading ? "1px solid #DBDBDB" : variant === (null || undefined || "") ? "1px solid #DBDBDB" : variant === "primary" ? `1px solid ${themeColor.primary}` : variant === "secondary" ? `1px solid ${themeColor.secondary}` : variant === "tertiary" ? "0px" : "1px solid #DBDBDB",

        ...style,
        cursor: isLoading || hasLoading ? "not-allowed" : "pointer",
        ...buttonStyle,
    };

    const handleClick = async (event: any) => {
        try {
            setIsLoading(true);
            if (onClick)
                await onClick(event);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            id={id}
            onClick={handleClick}
            disabled={disabled || isLoading || hasLoading}
            style={buttonStyles}
            name={name}
            type={type}
            className={`button ${className}`}
        >
            {isLoading || hasLoading ? (
                <span
                    className="spinner-border spinner-border-sm p-2"
                    role="status"
                    aria-hidden="true"
                ></span>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
