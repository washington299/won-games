import { Linux, Windows, Apple } from "@styled-icons/fa-brands";

import { MediaMatch } from "components/MediaMatch";
import { Heading } from "components/Heading";

import * as S from "./styles";

type Platform = "windows" | "linux" | "mac";

export type GameDetailsProps = {
	platforms: Platform[];
};

export const GameDetails = ({ platforms }: GameDetailsProps) => {
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
					<S.Label>Company</S.Label>
					<S.Description>Gearbox Software</S.Description>
				</div>

				<div>
					<S.Label>Release date</S.Label>
					<S.Description>Nov 16, 2019</S.Description>
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
					<S.Label>Editor</S.Label>
					<S.Description>2K</S.Description>
				</div>

				<div>
					<S.Label>Rating</S.Label>
					<S.Description>18+</S.Description>
				</div>

				<div>
					<S.Label>Genre</S.Label>
					<S.Description>Action / Adventure</S.Description>
				</div>
			</S.Content>
		</S.Wrapper>
	);
};
