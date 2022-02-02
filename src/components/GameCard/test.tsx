import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { GameCard } from ".";

const mockGameCard = {
	img: "/gameCard-img.png",
	title: "Population Zero",
	subtitle: "Other ocean",
	price: "R$ 215,00",
};

describe("<GameCard />", () => {
	it("should render GameCard with correct elements", () => {
		renderWithTheme(<GameCard {...mockGameCard} />);

		expect(screen.getByRole("img", { name: /Population Zero/i })).toHaveAttribute(
			"src",
			"/gameCard-img.png",
		);
		expect(screen.getByRole("heading", { name: /Population Zero/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Other ocean/i })).toBeInTheDocument();
		expect(screen.getByText("R$ 215,00")).toBeInTheDocument();
		expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument();
	});

	it("should render normal price as default", () => {
		renderWithTheme(<GameCard {...mockGameCard} />);

		const price = screen.getByText("R$ 215,00");

		expect(price).not.toHaveStyle({
			textDecoration: "line-through",
		});
		expect(price).toHaveStyle({
			backgroundColor: "#3CD3C1",
			color: "#FAFAFA",
		});
	});

	it("should render a line-through on price if promotional price is passed", () => {
		renderWithTheme(<GameCard {...mockGameCard} promotionalPrice="R$ 150,00" />);

		expect(screen.getByText("R$ 150,00")).not.toHaveStyle({
			textDecoration: "line-through",
		});
		expect(screen.getByText("R$ 215,00")).toHaveStyle({
			textDecoration: "line-through",
			color: "#8F8F8F",
		});
	});
});
