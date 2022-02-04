import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { HomeTemplate } from ".";

describe("<HomeTemplate />", () => {
	it("should render Menu and Footer correctly", () => {
		renderWithTheme(<HomeTemplate />);

		expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Contact/i })).toBeInTheDocument();
	});

	it("should render sections correctly", () => {
		renderWithTheme(<HomeTemplate />);

		expect(screen.getByRole("heading", { name: /News/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Most popular/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Upcoming/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Free games/i })).toBeInTheDocument();
	});
});
