import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { GameDetails, GameDetailsProps } from ".";

const props: GameDetailsProps = {
	platforms: ["windows", "linux", "mac"],
};

describe("<GameDetails />", () => {
	it("should render Headings correctly", () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByRole("heading", { name: /Developer/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Release date/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Platforms/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /publisher/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Rating/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Genres/i })).toBeInTheDocument();
	});
});
