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
});
