import { screen } from "@testing-library/react";
import { AddShoppingCart } from "@styled-icons/material-outlined";

import { renderWithTheme } from "utils/tests/helpers";

import Button from ".";

describe("<Button />", () => {
	it("should render button text correctly", () => {
		const { container } = renderWithTheme(<Button>My button</Button>);

		expect(screen.getByText(/My button/i)).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});

	it("should render button with medium size by default", () => {
		renderWithTheme(<Button>My button</Button>);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ height: "4rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ fontSize: "1.4rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({
			padding: "0.8rem 3.2rem",
		});
	});

	it("should render button with small size when prop is passed", () => {
		renderWithTheme(<Button size="small">My button</Button>);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ height: "3rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ fontSize: "1.2rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({
			padding: "0.8rem 1.6rem",
		});
	});

	it("should render button with large size when prop is passed", () => {
		renderWithTheme(<Button size="large">My button</Button>);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ height: "5rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ fontSize: "1.6rem" });
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({
			padding: "0.8rem 4.8rem",
		});
	});

	it("should render button with full width when prop is passed", () => {
		renderWithTheme(<Button fullWidth>My button</Button>);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({ width: "100%" });
	});

	it("should render button with icon when prop is passed", () => {
		renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>My button</Button>);

		expect(screen.getByTestId("icon")).toBeInTheDocument();
	});

	it("should render a minimal button when prop is passed", () => {
		renderWithTheme(
			<Button icon={<AddShoppingCart data-testid="icon" />} minimal>
				My button
			</Button>,
		);

		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyle({
			background: "none",
			color: "#F231A5",
		});
		expect(screen.getByRole("button", { name: /My button/i })).toHaveStyleRule(
			"background",
			"none",
			{ modifier: ":hover" },
		);
	});

	it("should render button as a link", () => {
		renderWithTheme(
			<Button as="a" href="/link" size="large">
				My button
			</Button>,
		);

		expect(screen.getByRole("link", { name: /My button/i })).toHaveAttribute("href", "/link");
		expect(screen.getByRole("link", { name: /My button/i })).toHaveStyle({ fontSize: "1.6rem" });
	});
});
