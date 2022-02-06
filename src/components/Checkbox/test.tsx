import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Checkbox } from ".";

describe("<Checkbox />", () => {
	it("should render Checkbox with no label by default", () => {
		renderWithTheme(<Checkbox />);

		expect(screen.queryByLabelText(/My checkbox/i)).not.toBeInTheDocument();
	});

	it("should render Checkbox with correct label", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" />);

		expect(screen.getByLabelText(/My checkbox/i)).toBeInTheDocument();
		expect(screen.getByText(/My checkbox/i)).toHaveAttribute("for", "my-checkbox");
	});

	it("should render Checkbox with correct label", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" />);

		expect(screen.getByLabelText(/My checkbox/i)).toBeInTheDocument();
		expect(screen.getByText(/My checkbox/i)).toHaveAttribute("for", "my-checkbox");
	});

	it("should render Checkbox with black label by default", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" />);

		expect(screen.getByText(/My checkbox/i)).toHaveStyle({ color: "#030517" });
	});

	it("should render Checkbox with white label if prop is passed", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" labelColor="white" />);

		expect(screen.getByText(/My checkbox/i)).toHaveStyle({ color: "#FAFAFA" });
	});
});
