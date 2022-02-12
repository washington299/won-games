import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import { TextField } from "components/TextField";
import { Button } from "components/Button";
import { FormLink, FormWrapper } from "components/FormStyles";

export const FormSignUp = () => {
	return (
		<FormWrapper>
			<form>
				<TextField type="text" name="name" placeholder="Name" icon={<AccountCircle />} />
				<TextField type="email" name="email" placeholder="E-mail" icon={<Email />} />
				<TextField type="password" name="password" placeholder="Password" icon={<Lock />} />
				<TextField
					type="password"
					name="confirm_password"
					placeholder="Confirm password"
					icon={<Lock />}
				/>
				<Button size="large" fullWidth>
					Sign up now
				</Button>

				<FormLink>
					Already have an account?{" "}
					<Link href="/sign-in">
						<a>Sign in</a>
					</Link>
				</FormLink>
			</form>
		</FormWrapper>
	);
};
