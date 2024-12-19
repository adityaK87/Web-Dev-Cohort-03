import { ReactElement } from "react";

export interface ButtonProps {
	variant: "primary" | "secondary";
	size: "sm" | "lg" | "md";
	text: string;
	startIcon?: ReactElement;
	endIcon?: ReactElement;
	onClick?: () => void;
}

const variantStyle = {
	primary: "bg-purple-600 text-white",
	secondary: "bg-purple-200 text-purple-600",
};

const sizeStyle = {
	sm: "px-2 py-1",
	md: "px-4 py-2",
	lg: "px-8 py-4 text-xl",
};
const defaultStyle = "rounded-md mx-4 flex items-center font-300";

export const Button = ({
	variant,
	size,
	text,
	startIcon,
	endIcon,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={`${variantStyle[variant]} ${sizeStyle[size]} ${defaultStyle}`}
			onClick={onClick}>
			{startIcon ? <span className="pr-2">{startIcon}</span> : null}
			{text}
			{endIcon ? <span className="pl-2">{endIcon}</span> : null}
		</button>
	);
};
