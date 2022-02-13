import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { BaseTemplate } from ".";

jest.mock("components/Menu", () => {
	return {
		__esModule: true,
		Menu: function Mock() {
			return <div data-testid="Mock Menu"></div>;
		},
	};
});

jest.mock("components/Footer", () => {
	return {
		__esModule: true,
		Footer: function Mock() {
			return <div data-testid="Mock Footer"></div>;
		},
	};
});

describe("<BaseTemplate />", () => {
	it("should render Menu, Footer and children correctly", () => {
		renderWithTheme(
			<BaseTemplate>
				<h1>Children</h1>
			</BaseTemplate>,
		);

		expect(screen.getByTestId(/Mock menu/i)).toBeInTheDocument();
		expect(screen.getByTestId(/Mock footer/i)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /children/i })).toBeInTheDocument();
	});
});
