import "match-media-mock";

import { fireEvent, screen } from "@testing-library/react";

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

	it("should handle open/close modal", () => {
		renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

		const modal = screen.getByLabelText("modal");

		expect(modal.getAttribute("aria-hidden")).toBe("true");
		expect(modal).toHaveStyle({ opacity: 0 });

		fireEvent.click(screen.getByRole("button", { name: mockGallery[0].alt }));

		expect(modal.getAttribute("aria-hidden")).toBe("false");
		expect(modal).toHaveStyle({ opacity: 1 });

		fireEvent.click(screen.getByRole("button", { name: /Close modal/i }));

		expect(modal.getAttribute("aria-hidden")).toBe("true");
		expect(modal).toHaveStyle({ opacity: 0 });
	});
});
