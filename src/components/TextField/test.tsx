import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { TextField } from ".";

describe("<TextField />", () => {
	it("should render TextField correctly", () => {
		renderWithTheme(<TextField />);

		expect(screen.getByRole("textbox")).toBeInTheDocument();
		expect(screen.queryByText(/label/)).not.toBeInTheDocument();
	});

	it("should render TextField label if prop is passed", () => {
		renderWithTheme(<TextField label="Label" labelFor="label" />);

		expect(screen.getByText(/label/i)).toBeInTheDocument();
		expect(screen.getByText(/label/i)).toHaveAttribute("for", "label");
	});
});
