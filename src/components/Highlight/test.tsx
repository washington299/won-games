import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Highlight } from ".";

const highlightMock = {
	title: "Read Dead it’s back",
	subtitle: "Come see John’s new adventures",
	backgroundImage: "/red-dead-background.jpg",
	buttonLabel: "Buy now",
	buttonLink: "/games/red-dead",
};

describe("<Highlight />", () => {
	it("should render correctly", () => {
		renderWithTheme(<Highlight {...highlightMock} />);

		expect(screen.getByRole("heading", { name: /Read Dead it’s back/i })).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /Come see John’s new adventures/i }),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
			"href",
			"/games/red-dead",
		);
	});

	it("should render background image correctly", () => {
		const { container } = renderWithTheme(<Highlight {...highlightMock} />);

		expect(container.firstChild).toHaveStyle({ backgroundImage: "url(/red-dead-background.jpg)" });
	});

	it("should render float image correctly", () => {
		renderWithTheme(<Highlight {...highlightMock} floatImage="/red-dead-img.png" />);

		expect(screen.getByRole("img", { name: highlightMock.title })).toHaveAttribute(
			"src",
			"/red-dead-img.png",
		);
	});
});
