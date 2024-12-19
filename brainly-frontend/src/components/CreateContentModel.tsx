import CrossIcon from "../icons/CrossIcon";

export interface CreateContentProps {
	isOpen: boolean;
	setClose: () => void;
}

const CreateContentModel = ({ isOpen, setClose }: CreateContentProps) => {
	return (
		<div>
			{isOpen && (
				<div className="w-screen h-screen opacity-50 bg-slate-500 flex justify-center items-center fixed top-0 left-0">
					<div className="w-80 h-80 bg-white z-40 rounded-sm">
						<span
							onClick={setClose}
							className="text-black text- opacity-100 flex justify-end">
							<CrossIcon />
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateContentModel;
