import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Heading } from ".";

describe("<Heading />", () => {
	it("should render children correctly", () => {
		renderWithTheme(<Heading>Won games</Heading>);

		expect(screen.getByRole("heading", { name: /Won games/i })).toBeInTheDocument();
	});

	it("Should render white color by default", () => {
		renderWithTheme(<Heading>Won games</Heading>);

		expect(screen.getByRole("heading", { name: /Won games/i })).toHaveStyle({
			color: "#FAFAFA",
		});
	});

	it("Should render black color if prop is passed", () => {
		renderWithTheme(<Heading color="black">Won games</Heading>);

		expect(screen.getByRole("heading", { name: /Won games/i })).toHaveStyle({
			color: "#030517",
		});
	});

	it("Should render a lineLeft if prop is passed", () => {
		renderWithTheme(<Heading lineLeft>Won games</Heading>);

		expect(screen.getByRole("heading", { name: /Won games/i })).toHaveStyle({
			borderLeft: "0.7rem solid #3CD3C1",
		});
	});

	it("Should render a lineBottom if prop is passed", () => {
		renderWithTheme(<Heading lineBottom>Won games</Heading>);

		expect(screen.getByRole("heading", { name: /Won games/i })).toHaveStyleRule(
			"border-bottom",
			"0.5rem solid #F231A5",
			{ modifier: "::after" },
		);
	});

	it("Should render a small size if prop is passed", () => {
		renderWithTheme(<Heading size="small">Won games</Heading>);

		expect(screen.getByRole("heading", { name: /Won games/i })).toHaveStyle({
			fontSize: "1.6rem",
		});
		expect(screen.getByRole("heading", { name: /Won games/i })).toHaveStyleRule("width", "3rem", {
			modifier: "::after",
		});
	});
});
