import { GetServerSideProps } from "next";

import { items as bannersMock } from "components/BannerSlider/mock";
import { items as gamesMock } from "components/GameCardSlider/mock";
import { item as highlightMock } from "components/Highlight/mock";

import { HomeTemplate, HomeTemplateProps } from "templates/Home";

const Index = (props: HomeTemplateProps) => {
	return <HomeTemplate {...props} />;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
			banners: bannersMock,
			newGames: gamesMock,
			mostPopularHighlight: highlightMock,
			mostPopularGames: gamesMock,
			upcomingGames: gamesMock,
			upcomingHighlight: highlightMock,
			upcomingMoreGames: gamesMock,
			freeGamesHighlight: highlightMock,
			freeGames: gamesMock,
		},
	};
};
