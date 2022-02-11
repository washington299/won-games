import Link from "next/link";
import { Email, Lock } from "@styled-icons/material-outlined";

import { TextField } from "components/TextField";
import { Button } from "components/Button";

import * as S from "./styles";

export const FormSignIn = () => {
	return (
		<S.Wrapper>
			<TextField type="email" name="email" placeholder="E-mail" icon={<Email />} />
			<TextField type="password" name="password" placeholder="Password" icon={<Lock />} />
			<S.ForgotPassword>Forgot your password?</S.ForgotPassword>
			<Button size="large" fullWidth>
				Sign in now
			</Button>
			<S.FormLink>
				Don&apos;t have an account?{" "}
				<Link href="/sign-up">
					<a>Sign up</a>
				</Link>
			</S.FormLink>
		</S.Wrapper>
	);
};
