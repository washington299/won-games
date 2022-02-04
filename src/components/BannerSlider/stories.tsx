import { Story, Meta } from "@storybook/react";

import { BannerSlider, BannerSliderProps } from ".";

const items = [
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Borderlands",
		subtitle: "<p>Play the new <strong>Borderlands</strong> season.</p>",
		buttonLabel: "Buy now",
		buttonLink: "/games/borderlans",
		ribbonText: "Best seller",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x590",
		title: "Borderlands 2",
		subtitle: "<p>Play the new <strong>Borderlands 2</strong> season.</p>",
		buttonLabel: "Buy now",
		buttonLink: "/games/borderlans2",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x595",
		title: "Borderlands 3",
		subtitle: "<p>Play the new <strong>Borderlands 3</strong> season.</p>",
		buttonLabel: "Buy now",
		buttonLink: "/games/borderlans3",
	},
];

export default {
	title: "BannerSlider",
	component: BannerSlider,
	args: { items },
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			default: "won-dark",
		},
	},
} as Meta;

export const Default: Story<BannerSliderProps> = args => (
	<div style={{ maxWidth: "130rem", margin: "0 auto" }}>
		<BannerSlider {...args} />
	</div>
);
