import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Logo } from ".";

describe("<Logo />", () => {
	it("should render white label by default", () => {
		renderWithTheme(<Logo />);

		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({ color: "#FAFAFA" });
		expect(screen.getByLabelText(/Won games/i).parentElement).toMatchSnapshot();
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

	it("should hide label on mobile devices if hideLabel is passed on props", () => {
		renderWithTheme(<Logo hideLabel />);

		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyleRule("width", "5.8rem", {
			media: "(max-width: 768px)",
		});
		expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyleRule("height", "4.5rem", {
			media: "(max-width: 768px)",
		});
	});
});
