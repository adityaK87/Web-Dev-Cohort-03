import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Button";
import Input from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import toast from "react-hot-toast";

export interface CreateContentProps {
	isOpen: boolean;
	setClose: () => void;
}

enum contentType {
	Youtube = "youtube",
	Twitter = "twitter",
}

const CreateContentModel = ({ isOpen, setClose }: CreateContentProps) => {
	const titleRef = useRef<HTMLInputElement>();
	const linkRef = useRef<HTMLInputElement>();
	const [type, setType] = useState(contentType.Youtube);

	const addContent = async () => {
		const title = titleRef.current?.value;
		const link = linkRef.current?.value;

		await axios.post(
			`${BACKEND_URL}/api/v1/content`,
			{
				title,
				link,
				type,
			},
			{
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			}
		);
		toast.success("Content Added Successfully");
		setClose();
	};

	return (
		<div>
			{isOpen && (
				<div>
					<div className="w-screen h-screen opacity-60 bg-slate-500 flex justify-center items-center fixed top-0 left-0"></div>
					<div className="w-screen h-screen  flex justify-center items-center fixed top-0 left-0">
						<div className="w-80 py-4 bg-white text-center rounded flex flex-col justify-center">
							<span className="opacity-100">
								<div className="text-black opacity-100 flex justify-end">
									<span
										className="cursor-pointer"
										onClick={setClose}>
										<CrossIcon />
									</span>
								</div>
								<div>
									<Input
										reference={titleRef}
										placeholder={"Title"}
									/>
									<Input
										reference={linkRef}
										placeholder={"Link"}
									/>
								</div>
								<div>
									<h1>Select Type</h1>
									<div className="flex gap-2 justify-center p-2">
										<Button
											text="Youtube"
											size="md"
											variant={
												type === contentType.Youtube
													? "primary"
													: "secondary"
											}
											onClick={() =>
												setType(contentType.Youtube)
											}></Button>
										<Button
											text="Twitter"
											size="md"
											variant={
												type === contentType.Twitter
													? "primary"
													: "secondary"
											}
											onClick={() =>
												setType(contentType.Twitter)
											}></Button>
									</div>
								</div>
								<span className="text-center flex justify-center">
									<Button
										variant="primary"
										text="Submit"
										size="md"
										onClick={addContent}
									/>
								</span>
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateContentModel;
