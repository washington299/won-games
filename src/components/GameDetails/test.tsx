import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { GameDetails, GameDetailsProps } from ".";

const props: GameDetailsProps = {
	platforms: ["windows", "linux", "mac"],
	releaseDate: "2020-11-21T23:00:00",
	rating: "BR0",
	genres: ["Action", "Adventure"],
};

describe("<GameDetails />", () => {
	it("Should render Headings correctly", () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByRole("heading", { name: /Developer/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Release date/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Platforms/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /publisher/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Rating/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Genres/i })).toBeInTheDocument();
	});

	it("Should render platforms icons correctly", () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByRole("img", { name: /windows/i })).toBeInTheDocument();
		expect(screen.getByRole("img", { name: /linux/i })).toBeInTheDocument();
		expect(screen.getByRole("img", { name: /mac/i })).toBeInTheDocument();
	});

	it("Should render date formated correctly", () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByText("Nov 21, 2020")).toBeInTheDocument();
	});

	it("Should render free rating when BR0", () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByText(/Free/i)).toBeInTheDocument();
	});

	it("Should render 18+ rating when BR18", () => {
		renderWithTheme(<GameDetails {...props} rating="BR18" />);

		expect(screen.getByText(/18\+/i)).toBeInTheDocument();
	});

	it("Should render genres correctly", () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByText("Action / Adventure")).toBeInTheDocument();
	});
});
