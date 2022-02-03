import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { BannerSlider } from ".";

const items = [
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Borderlands",
		subtitle: "<p>Play the new <strong>Borderlands</strong> season.</p>",
		buttonLabel: "Buy now",
		buttonLink: "/games/borderlans",
		ribbonText: "Best seller",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x590",
		title: "Borderlands 2",
		subtitle: "<p>Play the new <strong>Borderlands 2</strong> season.</p>",
		buttonLabel: "Buy now",
		buttonLink: "/games/borderlans2",
	},
];

describe("<BannerSlider />", () => {
	it("should render vertical slider", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelector(".slick-vertical")).toBeInTheDocument();
	});

	it("should render with 1 active item", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelectorAll(".slick-slide")).toHaveLength(2);
		expect(container.querySelectorAll("li.slick-active")).toHaveLength(1);

		expect(screen.getByRole("heading", { name: "Borderlands", hidden: false })).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Borderlands 2", hidden: true }),
		).toBeInTheDocument();
	});

	it("should render slick dots", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelector(".slick-dots")?.childElementCount).toBe(2);
	});
});
