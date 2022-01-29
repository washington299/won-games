import { Story, Meta } from "@storybook/react";

import { Banner, BannerProps } from ".";

export default {
	title: "Banner",
	component: Banner,
	args: {
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Borderlans",
		subtitle: "<p>Play the new <strong>Borderlands</strong> season.</p>",
		buttonLabel: "Buy now",
		buttonLink: "/games/borderlans",
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default: Story<BannerProps> = args => (
	<div style={{ maxWidth: "104rem", margin: "0 auto" }}>
		<Banner {...args} />
	</div>
);

export const WithRibbon: Story<BannerProps> = args => (
	<div style={{ maxWidth: "104rem", margin: "0 auto" }}>
		<Banner {...args} />
	</div>
);

WithRibbon.args = {
	ribbonText: "20% off",
	ribbonColor: "secondary",
	ribbonSize: "medium",
};
