interface propTypes {
	placeholder: string;
	size: "sm" | "md" | "xl";
	onChange: (e: React.ChangeEvent) => void;
}

export default function TextInput({ placeholder, size, onChange }: propTypes) {
	return (
		<input
			placeholder={placeholder}
			onChange={onChange}
			style={{
				padding: size == "sm" ? "10px" : size == "md" ? "15px" : "20px",
				margin: size == "sm" ? "10px" : size == "md" ? "15px" : "20px",
				border: "1px",
				background: "white",
				color: "black",
			}}
		/>
	);
}
