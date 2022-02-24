import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { TextContent } from ".";

const props = {
	title: "Description",
	content: "<h1>Content</h1>",
};

describe("<TextContent />", () => {
	it("should render title and content correctly", () => {
		renderWithTheme(<TextContent {...props} />);

		expect(screen.getByRole("heading", { name: /Description/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /Content/i })).toBeInTheDocument();
	});

	it("should render without title", () => {
		renderWithTheme(<TextContent content={props.content} />);

		expect(screen.queryByRole("heading", { name: /Description/i })).not.toBeInTheDocument();
	});
});
