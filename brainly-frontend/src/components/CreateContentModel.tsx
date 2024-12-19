import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Button";
import Input from "./Input";

export interface CreateContentProps {
	isOpen: boolean;
	setClose: () => void;
}

const CreateContentModel = ({ isOpen, setClose }: CreateContentProps) => {
	return (
		<div>
			{isOpen && (
				<div className="w-screen h-screen opacity-60 bg-slate-500 flex justify-center items-center fixed top-0 left-0">
					<div className="w-80 py-4 bg-white text-center rounded flex flex-col justify-center">
						<span>
							<div className="text-black opacity-100 flex justify-end">
								<span
									className="cursor-pointer"
									onClick={setClose}>
									<CrossIcon />
								</span>
							</div>
							<div>
								<Input placeholder={"Title"} />
								<Input placeholder={"Link"} />
							</div>
							<span className="text-center flex justify-center">
								<Button
									variant="primary"
									text="Submit"
									size="md"
								/>
							</span>
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateContentModel;
