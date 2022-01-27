import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Footer } from ".";

describe("<Footer />", () => {
	it("should render Footer with correct elements", () => {
		renderWithTheme(<Footer />);

		expect(screen.getByLabelText(/Won games/i)).toBeInTheDocument();
		expect(screen.getByText(/Contact/i)).toBeInTheDocument();
		expect(screen.getByText(/Follow us/i)).toBeInTheDocument();
		expect(screen.getByText(/Links/i)).toBeInTheDocument();
		expect(screen.getByText(/Location/i)).toBeInTheDocument();
	});
});
