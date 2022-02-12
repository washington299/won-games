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
		<section>
			<Container>
				<Menu />
				<S.BannerSection>
					<BannerSlider items={banners} />
				</S.BannerSection>
			</Container>

			<S.SectionNews>
				<Container>
					<Heading lineLeft lineColor="secondary" color="white">
						News
					</Heading>

					<GameCardSlider items={newGames} />
				</Container>
			</S.SectionNews>

			<Container>
				<S.SectionMostPopular>
					<Heading lineLeft lineColor="secondary">
						Most popular
					</Heading>

					<Highlight {...mostPopularHighlight} />
					<GameCardSlider items={mostPopularGames} arrowColor="white" />
				</S.SectionMostPopular>

				<S.SectionUpcoming>
					<Heading lineLeft lineColor="secondary">
						Up coming
					</Heading>

					<GameCardSlider items={upcomingGames} arrowColor="white" />
					<Highlight {...upcomingHighlight} />
					<GameCardSlider items={upcomingMoreGames} arrowColor="white" />
				</S.SectionUpcoming>

				<S.SectionFreeGames>
					<Heading lineLeft lineColor="secondary">
						Free games
					</Heading>

					<Highlight {...freeGamesHighlight} />
					<GameCardSlider items={freeGames} arrowColor="white" />
				</S.SectionFreeGames>
			</Container>

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</section>
	);
};
