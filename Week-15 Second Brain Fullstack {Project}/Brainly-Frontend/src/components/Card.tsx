import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcons";

interface CardProps {
	title: string;
	type: "youtube" | "twitter";
	link: string;
}

export const Card = ({ title, type, link }: CardProps) => {
	return (
		<div className="max-w-72 rounded-md border border-slate-200 min-h-52 shadow-md min-w-72">
			<div className="flex items-center justify-between px-2 pt-1">
				<div className="flex items-center text-lg">
					<span className="pr-2 cursor-pointer">
						<ShareIcon size="md" />
					</span>
					{title}
				</div>
				<div className="flex px-2">
					<span className="pr-2 cursor-pointer">
						<PlusIcon size="md" />
					</span>
					<span className="cursor-pointer">
						<ShareIcon size="md" />
					</span>
				</div>
			</div>

			<div className="mx-1 my-2">
				{type === "youtube" && (
					<iframe
						className="w-full"
						src={link.replace("watch?v=", "embed/")}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen></iframe>
				)}
				{type === "twitter" && (
					<blockquote className="twitter-tweet w-full p-2">
						<a href={link.replace("x.com", "twitter.com")}></a>
					</blockquote>
				)}
			</div>
		</div>
	);
};
