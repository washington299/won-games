import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { item as highlightMock } from "components/Highlight/mock";
import { items as gamesMock } from "components/GameCardSlider/mock";

import { Showcase } from ".";

const props = {
	title: "Most popular",
	highlight: highlightMock,
	games: gamesMock.slice(0, 1),
};

describe("<Showcase />", () => {
	it("should render Showcase with all elements", () => {
		renderWithTheme(<Showcase {...props} />);

		expect(screen.getByRole("heading", { name: /Most popular/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Read Dead it’s back/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: gamesMock[0].title })).toBeInTheDocument();
	});

	it("should render Showcase without title", () => {
		renderWithTheme(<Showcase highlight={props.highlight} games={props.games} />);

		expect(screen.queryByRole("heading", { name: /Most popular/i })).not.toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Read Dead it’s back/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: gamesMock[0].title })).toBeInTheDocument();
	});

	it("should render Showcase without highlight", () => {
		renderWithTheme(<Showcase title={props.title} games={props.games} />);

		expect(screen.getByRole("heading", { name: /Most popular/i })).toBeInTheDocument();
		expect(screen.queryByRole("heading", { name: /Read Dead it’s back/i })).not.toBeInTheDocument();
		expect(screen.getByRole("heading", { name: gamesMock[0].title })).toBeInTheDocument();
	});

	it("should render Showcase without games", () => {
		renderWithTheme(<Showcase title={props.title} highlight={props.highlight} />);

		expect(screen.getByRole("heading", { name: /Most popular/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Read Dead it’s back/i })).toBeInTheDocument();
		expect(screen.queryByRole("heading", { name: gamesMock[0].title })).not.toBeInTheDocument();
	});
});
