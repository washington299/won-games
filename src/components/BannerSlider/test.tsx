import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { BannerSlider } from ".";
import { items } from "./mock";

describe("<BannerSlider />", () => {
	it("should render vertical slider", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelector(".slick-vertical")).toBeInTheDocument();
	});

	it("should render with 1 active item", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelectorAll(".slick-slide")).toHaveLength(3);
		expect(container.querySelectorAll("li.slick-active")).toHaveLength(1);

		expect(screen.getByRole("heading", { name: "Borderlands", hidden: false })).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Borderlands 2", hidden: true }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Borderlands 3", hidden: true }),
		).toBeInTheDocument();
	});

	it("should render slick dots", () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />);

		expect(container.querySelector(".slick-dots")?.childElementCount).toBe(3);
	});
});
