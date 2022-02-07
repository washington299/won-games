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
