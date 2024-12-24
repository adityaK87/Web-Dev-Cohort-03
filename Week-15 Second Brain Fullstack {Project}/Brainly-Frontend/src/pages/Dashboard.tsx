import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import CreateContentModel from "../components/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcons";
import Sidebar from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Dashboard() {
	const [isOpen, setIsOpen] = useState(false);
	const contents = useContent();
	return (
		<div>
			<div className="">
				<Sidebar />
			</div>
			<div className="ml-72 pl-4 bg-slate-100 min-h-screen">
				<CreateContentModel
					isOpen={isOpen}
					setClose={() => setIsOpen(false)}
				/>

				<div className="flex justify-end gap-2 py-2 px-3">
					<Button
						onClick={() => {
							setIsOpen(true);
						}}
						size="md"
						variant="primary"
						text="Add Content"
						startIcon={<PlusIcon size="md" />}
					/>
					<Button
						onClick={async () => {
							const response = await axios.post(
								`${BACKEND_URL}/api/v1/brain/share`,
								{
									share: true,
								},
								{
									headers: {
										Authorization:
											localStorage.getItem("token"),
									},
								}
							);
							const shareLink = `${window.location.origin}/${response.data.hash}`;
							window.navigator.clipboard.writeText(shareLink);
							alert(shareLink);
						}}
						size="md"
						variant="secondary"
						text="Share Brain"
						startIcon={<ShareIcon size="md" />}
					/>
				</div>

				<div className="flex flex-wrap gap-4 justify-center">
					{contents.map(({ title, link, type, _id }) => (
						<Card key={_id} link={link} title={title} type={type} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
