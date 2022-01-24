import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Button } from ".";

describe("<Button />", () => {
	it("should render button text correctly", () => {
		renderWithTheme(<Button>My button</Button>);

		expect(screen.getByText(/My button/i)).toBeInTheDocument();
	});

	it("should render button with medium size by default", () => {
		renderWithTheme(<Button>My button</Button>);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ height: "4rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ fontSize: "1.4rem" });
	});

	it("should render button with small size when prop is passed", () => {
		renderWithTheme(<Button size="small">My button</Button>);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ height: "3rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ fontSize: "1.2rem" });
	});

	it("should render button with large size when prop is passed", () => {
		renderWithTheme(<Button size="large">My button</Button>);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ height: "5rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ fontSize: "1.6rem" });
	});
});
