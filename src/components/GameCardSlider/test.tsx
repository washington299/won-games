import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { GameCardSlider } from ".";
import { items } from "./mock";

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
