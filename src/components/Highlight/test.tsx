import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Highlight } from ".";

const highlightMock = {
	title: "Read Dead it’s back",
	subtitle: "Come see John’s new adventures",
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
});
