import { Story, Meta } from "@storybook/react";

import { Highlight, HightlightProps } from ".";

export default {
	title: "Highlight",
	component: Highlight,
	args: {
		title: "Read Dead it’s back",
		subtitle: "Come see John’s new adventures",
		backgroundImage: "/red-dead-background.jpg",
		buttonLabel: "Buy now",
		buttonLink: "/games/red-dead",
	},
} as Meta;

export const Default: Story<HightlightProps> = args => (
	<div style={{ maxWidth: "104rem", margin: "0 auto" }}>
		<Highlight {...args} />
	</div>
);

export const WithFloatImage: Story<HightlightProps> = args => (
	<div style={{ maxWidth: "104rem", margin: "0 auto" }}>
		<Highlight {...args} />
	</div>
);

WithFloatImage.args = {
	floatImage: "/red-dead-img.png",
};
