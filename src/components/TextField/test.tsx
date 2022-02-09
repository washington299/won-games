import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Message as MessageIcon } from "@styled-icons/material-outlined";

import { renderWithTheme } from "utils/tests/helpers";

import { TextField } from ".";

describe("<TextField />", () => {
	it("should render TextField correctly", () => {
		renderWithTheme(<TextField />);

		expect(screen.getByRole("textbox")).toBeInTheDocument();
		expect(screen.queryByText(/label/)).not.toBeInTheDocument();
	});

	it("should render TextField label if prop is passed", () => {
		renderWithTheme(<TextField label="Label" labelFor="label" />);

		expect(screen.getByText(/label/i)).toBeInTheDocument();
		expect(screen.getByText(/label/i)).toHaveAttribute("for", "label");
	});

	it("should render TextField with correct placeholder", () => {
		renderWithTheme(<TextField label="Label" labelFor="label" placeholder="email@email.com" />);

		expect(screen.getByPlaceholderText(/email@email.com/i)).toBeInTheDocument();
	});

	it("should render icon correctly", () => {
		renderWithTheme(<TextField icon={<MessageIcon data-testid="icon" />} />);

		expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
	});

	it("should change input value and call onInput correctly", () => {
		const onInput = jest.fn();

		renderWithTheme(<TextField label="Label" labelFor="label" onInput={onInput} />);

		const input = screen.getByRole("textbox");
		const text = "This is a text";

		userEvent.type(input, text);

		expect(input).toHaveValue(text);
		expect(onInput).toHaveBeenCalledTimes(text.length);
		expect(onInput).toHaveBeenCalledWith(text);
	});

	it("should render input with initial values correctly", () => {
		renderWithTheme(<TextField label="Label" labelFor="label" initialValue="initial value" />);

		expect(screen.getByRole("textbox")).toHaveValue("initial value");
	});

	it("should TextField be accessible", () => {
		renderWithTheme(<TextField label="Label" labelFor="label" />);

		expect(document.body).toHaveFocus();

		userEvent.tab();

		expect(screen.getByRole("textbox")).toHaveFocus();
	});
});
