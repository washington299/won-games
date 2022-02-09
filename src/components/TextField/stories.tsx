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
};

export const WithInitialValue: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

WithInitialValue.args = {
	label: "Label",
	labelFor: "label",
	initialValue: "initial value",
};

export const WithIcon: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

WithIcon.args = {
	label: "Label",
	labelFor: "label",
	placeholder: "Email@email.com",
	icon: <EmailIcon />,
};

export const Disabled: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

Disabled.args = {
	label: "Label",
	labelFor: "label",
	placeholder: "email@email.com",
	disabled: true,
};
