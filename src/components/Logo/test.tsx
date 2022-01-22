import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Logo } from ".";

describe("<Logo />", () => {
	it("should render white label by default", () => {
		renderWithTheme(<Logo />);

		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({ color: "#FAFAFA" });
	});

	it("should render black label if black color is passed on props", () => {
		renderWithTheme(<Logo color="black" />);

		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({ color: "#030517" });
	});

	it("should render normal size Logo by default", () => {
		renderWithTheme(<Logo />);

		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({ width: "11rem" });
		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({ height: "3.3rem" });
	});

	it("should render bigger size Logo by if large size is passed on props", () => {
		renderWithTheme(<Logo size="large" />);

		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({ width: "20rem" });
		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({ height: "5.9rem" });
	});
});
