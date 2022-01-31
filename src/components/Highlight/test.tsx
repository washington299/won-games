import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Highlight } from ".";
import * as S from "./styles";

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

	it("should render Highlight on right side by default", () => {
		const { container } = renderWithTheme(<Highlight {...highlightMock} />);

		// eslint-disable-next-line prettier/prettier
		expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'floatImage content'");
		expect(container.firstChild).toHaveStyleRule("text-align", "right", {
			modifier: `${S.Content}`,
		});
	});

	it("should render Highlight on left side if prop is passed", () => {
		const { container } = renderWithTheme(<Highlight {...highlightMock} alignment="left" />);

		// eslint-disable-next-line prettier/prettier
		expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'content floatImage'");
		expect(container.firstChild).toHaveStyleRule("text-align", "left", {
			modifier: `${S.Content}`,
		});
	});
});
