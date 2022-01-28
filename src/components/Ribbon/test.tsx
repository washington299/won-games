import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Ribbon } from ".";

describe("<Ribbon />", () => {
	it("should render Ribbon text correctly", () => {
		renderWithTheme(<Ribbon>Best seller</Ribbon>);

		expect(screen.getByText(/Best seller/i)).toBeInTheDocument();
	});

	it("should render Ribbon with primary color by default", () => {
		renderWithTheme(<Ribbon>Best seller</Ribbon>);

		expect(screen.getByText(/Best seller/i)).toHaveStyle({ backgroundColor: "#F231A5" });
	});

	it("should render Ribbon with secondary color if prop is passed", () => {
		renderWithTheme(<Ribbon bgColor="secondary">Best seller</Ribbon>);

		expect(screen.getByText(/Best seller/i)).toHaveStyle({ backgroundColor: "#3CD3C1" });
	});

	it("should render Ribbon with medium size by default", () => {
		renderWithTheme(<Ribbon>Best seller</Ribbon>);

		expect(screen.getByText(/Best seller/i)).toHaveStyle({ height: "3.3rem", fontSize: "1.4rem" });
	});

	it("should render Ribbon with small size if prop is passed", () => {
		renderWithTheme(<Ribbon size="small">Best seller</Ribbon>);

		expect(screen.getByText(/Best seller/i)).toHaveStyle({ height: "2.4rem", fontSize: "1.2rem" });
	});

	it("should render Ribbon with large size if prop is passed", () => {
		renderWithTheme(<Ribbon size="large">Best seller</Ribbon>);

		expect(screen.getByText(/Best seller/i)).toHaveStyle({ height: "4rem", fontSize: "1.6rem" });
	});
});
