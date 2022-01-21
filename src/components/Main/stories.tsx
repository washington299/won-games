import { Story, Meta } from "@storybook/react";
import { Main, MainProps } from ".";

export default {
	title: "Main",
	component: Main,
	args: {
		title: "Default Title",
		description: "Default Description",
	},
} as Meta;

export const Default: Story<MainProps> = args => <Main {...args} />;

export const Secondary: Story<MainProps> = args => <Main {...args} />;

Secondary.args = {
	title: "Secondary title",
	description: "Secondary description",
};
