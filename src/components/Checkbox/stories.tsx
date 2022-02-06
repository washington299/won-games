import { Story, Meta } from "@storybook/react";

import { Checkbox } from ".";

export default {
	title: "Checkbox",
	component: Checkbox,
	argTypes: {
		isChecked: {
			control: { type: "" },
		},
		onCheck: {
			action: "checked",
		},
	},
} as Meta;

export const Default: Story = args => <Checkbox {...args} />;

export const DefaultChecked: Story = args => <Checkbox {...args} isChecked />;
