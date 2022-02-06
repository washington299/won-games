import { Story, Meta } from "@storybook/react";

import { Checkbox } from ".";

export default {
	title: "Checkbox",
	component: Checkbox,
} as Meta;

export const Default: Story = args => <Checkbox {...args} />;
