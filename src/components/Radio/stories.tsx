import { Story, Meta } from "@storybook/react";

import { Radio, RadioProps } from ".";

export default {
	title: "Radio",
	component: Radio,
	argTypes: {
		onCheck: { action: "checked" },
	},
} as Meta;

export const Default: Story<RadioProps> = args => <Radio {...args} />;

Default.args = {
	label: "Label",
	labelFor: "label",
};

export const DefaultChecked: Story<RadioProps> = args => <Radio {...args} />;

DefaultChecked.args = {
	label: "Label",
	labelFor: "label",
	defaultChecked: true,
};
