import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/tests/helpers";

import { Checkbox } from ".";

describe("<Checkbox />", () => {
	it("should render Checkbox with no label by default", () => {
		renderWithTheme(<Checkbox />);

		expect(screen.queryByLabelText(/My checkbox/i)).not.toBeInTheDocument();
	});

	it("should render Checkbox with correct label", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" />);

		expect(screen.getByLabelText(/My checkbox/i)).toBeInTheDocument();
		expect(screen.getByText(/My checkbox/i)).toHaveAttribute("for", "my-checkbox");
	});

	it("should render Checkbox with correct label", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" />);

		expect(screen.getByLabelText(/My checkbox/i)).toBeInTheDocument();
		expect(screen.getByText(/My checkbox/i)).toHaveAttribute("for", "my-checkbox");
	});

	it("should render Checkbox with black label by default", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" />);

		expect(screen.getByText(/My checkbox/i)).toHaveStyle({ color: "#030517" });
	});

	it("should render Checkbox with white label if prop is passed", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" labelColor="white" />);

		expect(screen.getByText(/My checkbox/i)).toHaveStyle({ color: "#FAFAFA" });
	});

	it("should dispatch onCheck when checkbox is changed", () => {
		const onCheck = jest.fn();

		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" onCheck={onCheck} />);

		expect(onCheck).not.toHaveBeenCalled();

		fireEvent.click(screen.getByLabelText(/My checkbox/i));

		expect(onCheck).toHaveBeenCalledTimes(1);
		expect(onCheck).toHaveBeenCalledWith(true);
	});

	it("should mark checkbox as checked by default if prop is passed", () => {
		const onCheck = jest.fn();

		renderWithTheme(
			<Checkbox label="My checkbox" labelFor="my-checkbox" onCheck={onCheck} isChecked />,
		);

		const checkbox = screen.getByLabelText(/My checkbox/i);

		expect(checkbox).toBeChecked();

		fireEvent.click(checkbox);

		expect(onCheck).toHaveBeenCalledTimes(1);
		expect(onCheck).toHaveBeenCalledWith(false);
		expect(checkbox).not.toBeChecked();
	});

	it("should make checkbox accessible", () => {
		renderWithTheme(<Checkbox label="My checkbox" labelFor="my-checkbox" />);

		expect(document.body).toHaveFocus();

		userEvent.tab();

		expect(screen.getByLabelText(/My checkbox/i)).toHaveFocus();

		userEvent.click(screen.getByLabelText(/My checkbox/i));

		expect(screen.getByLabelText(/My checkbox/i)).toBeChecked();
	});
});
