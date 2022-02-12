import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { FormSignUp } from ".";

describe("<FormSignUp />", () => {
	it("should render form sign up elemetns correctly", () => {
		renderWithTheme(<FormSignUp />);

		expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Confirm password")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /Sign up now/i })).toBeInTheDocument();
		expect(screen.getByText("Already have an account?")).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /Sign in/i })).toHaveAttribute("href", "/sign-in");
	});
});
