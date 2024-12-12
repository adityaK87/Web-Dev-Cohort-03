import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcons";

function App() {
	return (
		<>
			<Button
				onClick={() => {
					console.log("large Primary Button");
				}}
				size="sm"
				variant="primary"
				text="Add"
				startIcon={<PlusIcon size="md" />}
				endIcon={<ShareIcon size="md" />}
			/>
			<Button
				onClick={() => {
					console.log("large Primary Button");
				}}
				size="md"
				variant="secondary"
				text="Share"
				startIcon={<ShareIcon size="md" />}
			/>
			<Button
				onClick={() => {
					console.log("large Primary Button");
				}}
				size="sm"
				variant="primary"
				text="Add Content"
				startIcon={<PlusIcon size="sm" />}
			/>
		</>
	);
}

export default App;
