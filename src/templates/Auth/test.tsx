import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Auth } from ".";

describe("<Auth />", () => {
	it("should render logo, titles and children correctly", () => {
		renderWithTheme(
			<Auth title="Title">
				<input type="text" />
			</Auth>,
		);

		expect(screen.getAllByLabelText(/Won games/i)).toHaveLength(2);
		expect(
			screen.getByRole("heading", { name: /All your favorite games in one place/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /Won is the best and most complete gaming platform./i }),
		).toBeInTheDocument();
		expect(screen.getByText(/Won Games 2020 © Todos os Direitos Reservados/i)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Title/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});
});
