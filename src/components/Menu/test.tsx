import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Menu } from ".";

describe("<Menu />", () => {
	it("should render menu elements correctly", () => {
		renderWithTheme(<Menu />);

		expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Won games/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Open shopping cart/i)).toBeInTheDocument();
	});

	it("should toggle menu", () => {
		renderWithTheme(<Menu />);

		const menuFull = screen.getByRole("navigation", { hidden: true });

		expect(menuFull.getAttribute("aria-hidden")).toBe("true");
		expect(menuFull).toHaveStyle({ opacity: 0 });

		fireEvent.click(screen.getByLabelText(/Open menu/i));

		expect(menuFull.getAttribute("aria-hidden")).toBe("false");
		expect(menuFull).toHaveStyle({ opacity: 1 });

		fireEvent.click(screen.getByLabelText(/Close menu/i));

		expect(menuFull.getAttribute("aria-hidden")).toBe("true");
		expect(menuFull).toHaveStyle({ opacity: 0 });
	});

	it("should show correct elements on menu if logged out", () => {
		renderWithTheme(<Menu />);

		expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
		expect(screen.getByText(/Sign in now/i)).toBeInTheDocument();
		expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
	});

	it("should show correct elements on menu if logged in", () => {
		renderWithTheme(<Menu username="Washington" />);

		expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/My account/i)).toBeInTheDocument();
		expect(screen.queryByText(/Wishlist/i)).toBeInTheDocument();
	});
});
