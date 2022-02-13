import { Container } from "components/Container";
import { Menu } from "components/Menu";
import { Footer } from "components/Footer";
import { BannerSlider } from "components/BannerSlider";
import { Showcase } from "components/Showcase";

import { BannerProps } from "components/Banner";
import { HightlightProps } from "components/Highlight";
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
				<Showcase title="News" games={newGames} />
			</S.SectionNews>

			<Showcase title="Most popular" highlight={mostPopularHighlight} games={mostPopularGames} />

			<Showcase title="Up coming" games={upcomingGames} />
			<Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />

			<Showcase title="Free games" highlight={freeGamesHighlight} games={freeGames} />

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</section>
	);
};
