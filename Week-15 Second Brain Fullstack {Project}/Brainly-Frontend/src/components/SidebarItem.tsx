import { ReactElement } from "react";

const SidebarItem = ({ icon, text }: { icon: ReactElement; text: string }) => {
	return (
		<div className="flex items-center text-gray-700 py-2 cursor-pointer hover:bg-slate-200 rounded pl-4 max-w-48">
			<div className="pr-2">{icon}</div>
			<div className="">{text}</div>
		</div>
	);
};

export default SidebarItem;
