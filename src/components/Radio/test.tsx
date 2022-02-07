import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/tests/helpers";

import { Radio } from ".";

describe("<Radio />", () => {
	it("should render Radio correctly", () => {
		renderWithTheme(<Radio />);

		expect(screen.getByRole("radio")).toBeInTheDocument();
		expect(screen.queryByText(/label/i)).not.toBeInTheDocument();
	});

	it("should render Radio label correctly", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" />);

		expect(screen.getByText(/My label/i)).toBeInTheDocument();
		expect(screen.getByText(/My label/i)).toHaveAttribute("for", "my-label");
	});

	it("should render Radio label with black color by default", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" />);

		expect(screen.getByText(/My label/i)).toHaveStyle({ color: "#030517" });
	});

	it("should render Radio label with white color if prop is passed", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" labelColor="white" />);

		expect(screen.getByText(/My label/i)).toHaveStyle({ color: "#FAFAFA" });
	});

	it("should dispatch onCheck when Radio is checked", () => {
		const onCheck = jest.fn();

		renderWithTheme(<Radio label="My label" labelFor="my-label" value="value" onCheck={onCheck} />);

		expect(onCheck).not.toHaveBeenCalled();

		userEvent.click(screen.getByRole("radio"));

		expect(onCheck).toHaveBeenCalledTimes(1);
		expect(onCheck).toHaveBeenCalledWith("value");
	});

	it("should render Radio checked if prop is passed", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" defaultChecked />);

		expect(screen.getByRole("radio")).toBeChecked();
	});

	it("should make Radio accessible", () => {
		renderWithTheme(<Radio label="My label" labelFor="my-label" />);

		const radio = screen.getByRole("radio");

		expect(document.body).toHaveFocus();

		userEvent.tab();

		expect(radio).toHaveFocus();

		userEvent.click(radio);

		expect(radio).toBeChecked();
	});
});
