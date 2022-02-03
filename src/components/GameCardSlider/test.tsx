import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { GameCardSlider } from ".";

const items = [
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 1",
		subtitle: "Description of card 1",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 2",
		subtitle: "Description of card 2",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 3",
		subtitle: "Description of card 3",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 4",
		subtitle: "Description of card 4",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 5",
		subtitle: "Description of card 5",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 6",
		subtitle: "Description of card 6",
		price: "R$ 215,00",
	},
];

describe("<GameCardSlider />", () => {
	it("should render GameCardSlider with 4 active items", () => {
		const { container } = renderWithTheme(<GameCardSlider items={items} />);

		expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
	});

	it("should render black arrow color by default", () => {
		renderWithTheme(<GameCardSlider items={items} />);

		expect(screen.getByLabelText(/Previous games/i)).toHaveStyle({ color: "#030517" });
		expect(screen.getByLabelText(/Next games/i)).toHaveStyle({ color: "#030517" });
	});

	it("should render white arrow color if prop is passed", () => {
		renderWithTheme(<GameCardSlider items={items} arrowColor="white" />);

		expect(screen.getByLabelText(/Previous games/i)).toHaveStyle({ color: "#FAFAFa" });
		expect(screen.getByLabelText(/Next games/i)).toHaveStyle({ color: "#FAFAFA" });
	});
});
