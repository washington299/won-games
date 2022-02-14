import { Story, Meta } from "@storybook/react";
import { AddShoppingCart } from "@styled-icons/material-outlined";

import Button, { ButtonProps } from ".";

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

export const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
	children: "Button",
};

export const withIcon: Story<ButtonProps> = args => <Button {...args} />;

withIcon.args = {
	children: "Buy now",
	icon: <AddShoppingCart />,
};

export const asLink: Story<ButtonProps> = args => <Button {...args} />;

asLink.args = {
	children: "Buy now",
	size: "large",
	as: "a",
	href: "/link",
};
