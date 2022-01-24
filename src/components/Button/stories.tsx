import { Story, Meta } from "@storybook/react";
import { AddShoppingCart } from "@styled-icons/material-outlined";

import { Button } from ".";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		children: {
			type: "string",
		},
		icon: {
			control: { type: "" },
		},
	},
} as Meta;

export const Default: Story = args => <Button {...args} />;

Default.args = {
	children: "Button",
};

export const withIcon: Story = args => <Button {...args} />;

withIcon.args = {
	children: "Buy now",
	icon: <AddShoppingCart />,
};
