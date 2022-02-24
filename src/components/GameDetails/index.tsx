import { Linux, Windows, Apple } from "@styled-icons/fa-brands";

import { MediaMatch } from "components/MediaMatch";
import { Heading } from "components/Heading";

import * as S from "./styles";

type Platform = "windows" | "linux" | "mac";
type Rating = "BR0" | "BR10" | "BR12" | "BR14" | "BR16" | "BR18";

export type GameDetailsProps = {
	developer: string;
	platforms: Platform[];
	releaseDate: string;
	rating: Rating;
	genres: string[];
};

export const GameDetails = ({
	developer,
	platforms,
	releaseDate,
	rating,
	genres,
}: GameDetailsProps) => {
	const platformIcons = {
		windows: <Windows size={18} title="Windows" />,
		linux: <Linux size={18} title="Linux" />,
		mac: <Apple size={18} title="Mac" />,
	};

	return (
		<S.Wrapper>
			<MediaMatch greaterThan="small">
				<Heading lineLeft lineColor="secondary">
					Game details
				</Heading>
			</MediaMatch>

			<S.Content>
				<div>
					<S.Label>Developer</S.Label>
					<S.Description>{developer}</S.Description>
				</div>

				<div>
					<S.Label>Release date</S.Label>
					<S.Description>
						{new Intl.DateTimeFormat("en-US", {
							day: "numeric",
							month: "short",
							year: "numeric",
						}).format(new Date(releaseDate))}
					</S.Description>
				</div>

				<div>
					<S.Label>Platforms</S.Label>
					<S.IconsWrapper>
						{platforms.map(icon => (
							<S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
						))}
					</S.IconsWrapper>
				</div>

				<div>
					<S.Label>Publisher</S.Label>
					<S.Description>2K</S.Description>
				</div>

				<div>
					<S.Label>Rating</S.Label>
					<S.Description>
						{rating === "BR0" ? "FREE" : `${rating.replace("BR", "")}+`}
					</S.Description>
				</div>

				<div>
					<S.Label>Genres</S.Label>
					<S.Description>{genres.join(" / ")}</S.Description>
				</div>
			</S.Content>
		</S.Wrapper>
	);
};
