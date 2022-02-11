import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { FormSignIn } from ".";

describe("<FormSignIn />", () => {
	it("should render Form sign in elements correctly", () => {
		renderWithTheme(<FormSignIn />);

		expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
		expect(screen.getByText(/Forgot your password?/i)).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /Sign in now/i })).toBeInTheDocument();
		expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
		expect(screen.getByRole("link")).toHaveAttribute("href", "/sign-up");
	});
});
