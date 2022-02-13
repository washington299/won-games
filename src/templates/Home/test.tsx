import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { items as bannersMock } from "components/BannerSlider/mock";
import { items as gamesMock } from "components/GameCardSlider/mock";
import { item as highlightMock } from "components/Highlight/mock";

import { HomeTemplate } from ".";

const props = {
	banners: bannersMock,
	newGames: [gamesMock[0]],
	mostPopularHighlight: highlightMock,
	mostPopularGames: [gamesMock[0]],
	upcomingGames: [gamesMock[0]],
	upcomingHighlight: highlightMock,
	upcomingMoreGames: [gamesMock[0]],
	freeGamesHighlight: highlightMock,
	freeGames: [gamesMock[0]],
};

jest.mock("components/BannerSlider", () => {
	return {
		__esModule: true,
		BannerSlider: function Mock() {
			return <div data-testid="Mock BannerSlider"></div>;
		},
	};
});

jest.mock("components/Showcase", () => {
	return {
		__esModule: true,
		Showcase: function Mock() {
			return <div data-testid="Mock Showcase"></div>;
		},
	};
});

describe("<HomeTemplate />", () => {
	it("should render components elements correctly", () => {
		renderWithTheme(<HomeTemplate {...props} />);

		expect(screen.getByTestId(/Mock bannerSlider/i)).toBeInTheDocument();
		expect(screen.getAllByTestId(/Mock showcase/i)).toHaveLength(5);
	});
});
