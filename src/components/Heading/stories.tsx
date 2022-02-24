import { Story, Meta } from "@storybook/react";

import { Heading, HeadingProps } from ".";

export default {
	title: "Heading",
	component: Heading,
	parameters: {
		backgrounds: {
			default: "won-dark",
		},
	},
	argTypes: {
		children: {
			type: "string",
		},
	},
} as Meta;

export const Default: Story<HeadingProps> = args => <Heading {...args} />;

Default.args = {
	children: "Heading",
};
