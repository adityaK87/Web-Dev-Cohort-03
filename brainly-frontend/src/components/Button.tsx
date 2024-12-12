import { ReactElement } from "react";

export interface ButtonProps {
	variant: "primary" | "secondary";
	size: "sm" | "lg" | "md";
	text: string;
	startIcon?: ReactElement;
	endIcon?: ReactElement;
	onClick: () => void;
}

const variantStyle = {
	primary: "bg-blue-600 text-white",
	secondary: "bg-blue-300 text-blue-600",
};

const sizeStyle = {
	sm: "px-2 py-1",
	md: "px-4 py-2",
	lg: "px-8 py-4 text-xl",
};
const defaultStyle = "rounded-md mx-4 flex items-center";

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={`${variantStyle[props.variant]} ${
				sizeStyle[props.size]
			} ${defaultStyle}`}
			onClick={props.onClick}>
			{props.startIcon ? (
				<span className="pr-2">{props.startIcon}</span>
			) : null}
			{props.text}
			{props.endIcon ? (
				<span className="pl-2">{props.endIcon}</span>
			) : null}
		</button>
	);
};
