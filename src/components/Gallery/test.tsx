import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Gallery } from ".";
import mockGallery from "./mock";

describe("<Gallery />", () => {
	it("should render thumbnails correctly", () => {
		renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

		expect(screen.getByRole("button", { name: mockGallery[0].alt })).toHaveAttribute(
			"src",
			mockGallery[0].src,
		);
		expect(screen.getByRole("button", { name: mockGallery[1].alt })).toHaveAttribute(
			"src",
			mockGallery[1].src,
		);
	});
});
