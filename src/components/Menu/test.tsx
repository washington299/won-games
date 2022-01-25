import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Menu } from ".";

describe("<Menu />", () => {
	it("should render menu elements correctly", () => {
		renderWithTheme(<Menu />);

		expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Won games/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Open shopping cart/i)).toBeInTheDocument();
	});
});
