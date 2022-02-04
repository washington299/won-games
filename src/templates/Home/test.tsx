import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { items as bannersMock } from "components/BannerSlider/mock";
import { items as gamesMock } from "components/GameCardSlider/mock";
import { item as highlightMock } from "components/Highlight/mock";

import { HomeTemplate } from ".";

const props = {
	banners: bannersMock,
	newGames: gamesMock,
	mostPopularHighlight: highlightMock,
	mostPopularGames: gamesMock,
	upcomingGames: gamesMock,
	upcomingHighlight: highlightMock,
	upcomingMoreGames: gamesMock,
	freeGamesHighlight: highlightMock,
	freeGames: gamesMock,
};

describe("<HomeTemplate />", () => {
	it("should render Menu and Footer correctly", () => {
		renderWithTheme(<HomeTemplate {...props} />);

		expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Contact/i })).toBeInTheDocument();
	});

	it("should render sections headings correctly", () => {
		renderWithTheme(<HomeTemplate {...props} />);

		expect(screen.getByRole("heading", { name: /News/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Most popular/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Up coming/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Free games/i })).toBeInTheDocument();
	});

	it("should render section elements", () => {
		const { container } = renderWithTheme(<HomeTemplate {...props} />);

		// Banner and GameCards -Banner 3 slides, 5 sections with 6 cards each.
		expect(container.querySelectorAll(".slick-slide")).toHaveLength(33);
		// 3 Highlights
		expect(screen.getAllByText("Read Dead it’s back")).toHaveLength(3);
	});
});
