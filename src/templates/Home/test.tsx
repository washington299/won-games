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

describe("<HomeTemplate />", () => {
	it("should render components elements correctly", () => {
		const { container } = renderWithTheme(<HomeTemplate {...props} />);

		// menu and footer
		expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Contact/i })).toBeInTheDocument();

		// headings
		expect(screen.getByRole("heading", { name: /News/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Most popular/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Up coming/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Free games/i })).toBeInTheDocument();

		// Banner and GameCards -Banner 3 slides, 5 sections with 1 cards each.
		expect(container.querySelectorAll(".slick-slide")).toHaveLength(8);
		// 3 Highlights
		expect(screen.getAllByText("Read Dead it’s back")).toHaveLength(3);
	});
});
