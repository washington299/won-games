import { render, screen } from "@testing-library/react";

import { MediaMatch } from ".";

describe("<MediaMatch />", () => {
	let mobileScreen: Element;
	let desktopScreen: Element;

	beforeEach(() => {
		render(
			<>
				<MediaMatch greaterThan="medium">
					<h1 data-testid="desktop">Only on desktop</h1>
				</MediaMatch>
				<MediaMatch lessThan="medium">
					<h1 data-testid="mobile">Only on mobile</h1>
				</MediaMatch>
			</>,
		);

		mobileScreen = screen.getByTestId("mobile");
		desktopScreen = screen.getByTestId("desktop");
	});

	it("should hide components inside MediaMatch by default", () => {
		expect(mobileScreen.parentElement).toHaveStyle({ display: "none" });
		expect(desktopScreen.parentElement).toHaveStyle({ display: "none" });
	});

	it("should show components inside MediaMatch based on media query", () => {
		expect(mobileScreen.parentElement).toHaveStyleRule("display", "block", {
			media: "(max-width: 768px)",
		});

		expect(desktopScreen.parentElement).toHaveStyleRule("display", "block", {
			media: "(min-width: 768px)",
		});
	});
});
