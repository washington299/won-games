import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { Banner } from ".";

const bannerMock = {
	img: "https://source.unsplash.com/user/willianjusten/1042x580",
	title: "Borderlans",
	subtitle: "<p>Play the new <strong>Borderlands</strong> season.</p>",
	buttonLabel: "Buy now",
	buttonLink: "/games/borderlans",
};

describe("<Banner />", () => {
	it("should render Banner with correct elements", () => {
		const { container } = renderWithTheme(<Banner {...bannerMock} />);

		expect(screen.getByRole("img", { name: /Borderlans/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Borderlans/i })).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: /Play the new Borderlands season/i,
			}),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
			"href",
			"/games/borderlans",
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it("should render a Ribbon correctly", () => {
		renderWithTheme(
			<Banner {...bannerMock} ribbonText="20% off" ribbonSize="small" ribbonColor="secondary" />,
		);

		const ribbon = screen.getByText(/20% off/i);

		expect(ribbon).toBeInTheDocument();
		expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
		expect(ribbon).toHaveStyle({ height: "2.4rem", fontSize: "1.2rem" });
	});
});
