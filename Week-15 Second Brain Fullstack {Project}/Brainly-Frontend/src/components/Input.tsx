interface InputProps {
	reference: any;
	placeholder: string;
}
const Input = ({ reference, placeholder }: InputProps) => {
	return (
		<div>
			<input
				type="text"
				placeholder={placeholder}
				ref={reference}
				className="px-4 py-2 border rounded m-2 text-black"
			/>
		</div>
	);
};
export default Input;
