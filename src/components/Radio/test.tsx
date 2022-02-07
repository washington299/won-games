import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Radio } from ".";

describe("<Radio />", () => {
	it("should render Radio correctly", () => {
		renderWithTheme(<Radio />);

		expect(screen.getByRole("radio")).toBeInTheDocument();
		expect(screen.queryByText(/label/i)).not.toBeInTheDocument();
	});

	it("should render Radio label correctly", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" />);

		expect(screen.getByText(/My label/i)).toBeInTheDocument();
		expect(screen.getByText(/My label/i)).toHaveAttribute("for", "my-label");
	});

	it("should render Radio label with black color by default", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" />);

		expect(screen.getByText(/My label/i)).toHaveStyle({ color: "#030517" });
	});

	it("should render Radio label with white color if prop is passed", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" labelColor="white" />);

		expect(screen.getByText(/My label/i)).toHaveStyle({ color: "#FAFAFA" });
	});
});
