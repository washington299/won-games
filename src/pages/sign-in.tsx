import { Auth } from "templates/Auth";

import { FormSignIn } from "components/FormSignIn";

const SignIn = () => {
	return (
		<Auth title="Sign in">
			<FormSignIn />
		</Auth>
	);
};

export default SignIn;
