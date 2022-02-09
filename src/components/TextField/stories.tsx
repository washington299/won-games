import { Story, Meta } from "@storybook/react";

import { TextField, TextFieldProps } from ".";

export default {
	title: "TextField",
	component: TextField,
} as Meta;

export const Default: Story<TextFieldProps> = args => <TextField {...args} />;

Default.args = {
	label: "Label",
	labelFor: "label",
};

export const WithInitialValue: Story<TextFieldProps> = args => <TextField {...args} />;

WithInitialValue.args = {
	label: "Label",
	labelFor: "label",
	initialValue: "initial value",
};
