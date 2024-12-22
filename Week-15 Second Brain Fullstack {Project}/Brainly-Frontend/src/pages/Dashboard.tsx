import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import CreateContentModel from "../components/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcons";
import Sidebar from "../components/Sidebar";

function Dashboard() {
	const [isOpen, setIsOpen] = useState(false);
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

				<div className="flex justify-end gap-2 py-2">
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
						onClick={() => {
							console.log("large Primary Button");
						}}
						size="md"
						variant="secondary"
						text="Share Brain"
						startIcon={<ShareIcon size="md" />}
					/>
				</div>

				<div className="flex flex-wrap gap-4 justify-center">
					<Card
						link={"https://www.youtube.com/watch?v=Zf__nAYMuqw"}
						title="Youtube"
						type="youtube"
					/>
					<Card
						link={
							"https://x.com/thedanigrant/status/1866161308938490166"
						}
						title="Twitter"
						type="twitter"
					/>
					<Card
						link={"https://www.youtube.com/watch?v=Zf__nAYMuqw"}
						title="Youtube"
						type="youtube"
					/>
					<Card
						link={
							"https://x.com/thedanigrant/status/1866161308938490166"
						}
						title="Twitter"
						type="twitter"
					/>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
