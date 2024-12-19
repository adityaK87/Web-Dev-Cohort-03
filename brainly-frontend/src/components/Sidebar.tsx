import LogoIcon from "../icons/LogoIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
	return (
		<div className="absolute top-0 left-0 h-screen border-r-2 w-72 bg-white pl-8">
			<div className="text-2xl font-bold pt-8 flex items-center">
				<span className="text-purple-600 pr-4">
					<LogoIcon />
				</span>
				Brainly
			</div>
			<div className="pt-4">
				<SidebarItem text="Twitter" icon={<TwitterIcon />} />
				<SidebarItem text="Youtube" icon={<YoutubeIcon />} />
			</div>
		</div>
	);
};

export default Sidebar;
