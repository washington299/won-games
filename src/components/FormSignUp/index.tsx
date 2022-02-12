import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import { TextField } from "components/TextField";
import { Button } from "components/Button";

import * as S from "./styles";

export const FormSignUp = () => {
	return (
		<S.Wrapper>
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

			<S.FormLink>
				Already have an account?{" "}
				<Link href="/sign-in">
					<a>Sign in</a>
				</Link>
			</S.FormLink>
		</S.Wrapper>
	);
};
