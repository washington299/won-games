import { Story, Meta } from "@storybook/react";

import { TextField, TextFieldProps } from ".";

export default {
	title: "TextField",
	component: TextField,
} as Meta;

export const Default: Story<TextFieldProps> = args => (
	<div style={{ width: "30rem" }}>
		<TextField {...args} />
	</div>
);

Default.args = {
	label: "Label",
	labelFor: "label",
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
