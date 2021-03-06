import { Story, Meta } from "@storybook/react";
import { FormSignIn } from ".";

export default {
	title: "Form/FormSignIn",
	component: FormSignIn,
} as Meta;

export const Default: Story = () => (
	<div style={{ maxWidth: 300, margin: "0 auto" }}>
		<FormSignIn />
	</div>
);
