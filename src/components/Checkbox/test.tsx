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
});
