import { Container } from "components/Container";
import { Heading } from "components/Heading";
import { Menu } from "components/Menu";
import { Footer } from "components/Footer";
import { BannerSlider } from "components/BannerSlider";
import { GameCardSlider } from "components/GameCardSlider";
import { Highlight, HightlightProps } from "components/Highlight";

import { BannerProps } from "components/Banner";
import { GameCardProps } from "components/GameCard";

import * as S from "./styles";

export type HomeTemplateProps = {
	banners: BannerProps[];
	newGames: GameCardProps[];
	mostPopularHighlight: HightlightProps;
	mostPopularGames: GameCardProps[];
	upcomingGames: GameCardProps[];
	upcomingHighlight: HightlightProps;
	upcomingMoreGames: GameCardProps[];
	freeGamesHighlight: HightlightProps;
	freeGames: GameCardProps[];
};

export const HomeTemplate = ({
	banners,
	newGames,
	mostPopularHighlight,
	mostPopularGames,
	upcomingGames,
	upcomingHighlight,
	upcomingMoreGames,
	freeGamesHighlight,
	freeGames,
}: HomeTemplateProps) => {
	return (
		<S.Wrapper>
			<Container>
				<Menu />

				<BannerSlider items={banners} />
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary" color="black">
					News
				</Heading>

				<GameCardSlider items={newGames} />
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary">
					Most popular
				</Heading>

				<Highlight {...mostPopularHighlight} />
				<GameCardSlider items={mostPopularGames} arrowColor="white" />
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary">
					Upcoming
				</Heading>

				<GameCardSlider items={upcomingGames} arrowColor="white" />
				<Highlight {...upcomingHighlight} />
				<GameCardSlider items={upcomingMoreGames} arrowColor="white" />
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary">
					Free games
				</Heading>

				<Highlight {...freeGamesHighlight} />
				<GameCardSlider items={freeGames} arrowColor="white" />
			</Container>

			<Container>
				<Footer />
			</Container>
		</S.Wrapper>
	);
};
