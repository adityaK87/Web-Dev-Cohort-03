import { Fragment, useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import CreateContentModel from "./components/CreateContentModel";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcons";

function App() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Fragment>
			<CreateContentModel
				isOpen={isOpen}
				setClose={() => setIsOpen(false)}
			/>

			<div className="flex justify-end gap-2 m-4">
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

			<div className="flex flex-wrap gap-4">
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
		</Fragment>
	);
}

export default App;
