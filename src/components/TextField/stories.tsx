import { Story, Meta } from "@storybook/react";
import { Email as EmailIcon } from "@styled-icons/material-outlined";

import { TextField, TextFieldProps } from ".";

export default {
	title: "Form/TextField",
	component: TextField,
	argTypes: {
		icon: {
			control: { type: "" },
		},
	},
} as Meta;

export const Default: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

Default.args = {
	label: "Label",
	labelFor: "label",
	placeholder: "email@email.com",
	initialValue: "",
	disabled: false,
	error: "",
};

export const WithIcon: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

WithIcon.args = {
	...Default.args,
	icon: <EmailIcon />,
};

export const WithError: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

WithError.args = {
	...Default.args,
	icon: <EmailIcon />,
	error: "Ops... something failed :(",
};
