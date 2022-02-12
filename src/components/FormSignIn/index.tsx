import Link from "next/link";
import { Email, Lock } from "@styled-icons/material-outlined";

import Button from "components/Button";
import { TextField } from "components/TextField";
import { FormLink, FormWrapper } from "components/FormStyles";

import * as S from "./styles";

export const FormSignIn = () => {
	return (
		<FormWrapper>
			<form>
				<TextField type="email" name="email" placeholder="E-mail" icon={<Email />} />
				<TextField type="password" name="password" placeholder="Password" icon={<Lock />} />

				<S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

				<Button size="large" fullWidth>
					Sign in now
				</Button>

				<FormLink>
					Don&apos;t have an account?{" "}
					<Link href="/sign-up">
						<a>Sign up</a>
					</Link>
				</FormLink>
			</form>
		</FormWrapper>
	);
};
