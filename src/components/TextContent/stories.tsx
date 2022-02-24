import { Story, Meta } from "@storybook/react";

import { TextContent, TextContentProps } from ".";
import mockText from "./mock";

export default {
	title: "TextContent",
	component: TextContent,
	parameters: {
		backgrounds: {
			default: "won-dark",
		},
	},
	args: mockText,
} as Meta;

export const Default: Story<TextContentProps> = args => <TextContent {...args} />;
