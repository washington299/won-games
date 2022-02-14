import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { GameInfo } from ".";

const props = {
	title: "Borderlands",
	description:
		"Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.",
	price: "$ 215,00",
};

describe("<GameInfo />", () => {
	it("should render props correctly", () => {
		renderWithTheme(<GameInfo {...props} />);

		expect(screen.getByRole("heading", { name: /borderlands/i })).toBeInTheDocument();
		expect(screen.getByText(props.description)).toBeInTheDocument();
		expect(screen.getByText("$ 215,00")).toBeInTheDocument();
	});

	it("should render buttons correctly", () => {
		renderWithTheme(<GameInfo {...props} />);

		expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /wishlist/i })).toBeInTheDocument();
	});
});
