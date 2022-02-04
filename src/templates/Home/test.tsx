import { render } from "@testing-library/react";

import { HomeTemplate } from ".";

describe("<HomeTemplate />", () => {
	it("should render correctly", () => {
		const { container } = render(<HomeTemplate />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
