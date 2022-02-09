import { Story, Meta } from "@storybook/react";
import { Email as EmailIcon } from "@styled-icons/material-outlined";

import { TextField, TextFieldProps } from ".";

export default {
	title: "TextField",
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
};

export const WithInitialValue: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

WithInitialValue.args = {
	...Default.args,
	initialValue: "initial value",
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
