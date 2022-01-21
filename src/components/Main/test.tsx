import { render } from "@testing-library/react";

import { Main } from ".";

describe("<Main />", () => {
	it("should render correctly", () => {
		const { container } = render(<Main />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it("should render background-color correctly", () => {
		const { container } = render(<Main />);

		expect(container.firstChild).toHaveStyle({ "background-color": "#F00" });
	});
});
