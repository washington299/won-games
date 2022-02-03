import { Story, Meta } from "@storybook/react";

import { GameCardSlider, GameCardSliderProps } from ".";

const items = [
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 1",
		subtitle: "Description of card 1",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 2",
		subtitle: "Description of card 2",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 3",
		subtitle: "Description of card 3",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 4",
		subtitle: "Description of card 4",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 5",
		subtitle: "Description of card 5",
		price: "R$ 215,00",
	},
	{
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Card 6",
		subtitle: "Description of card 6",
		price: "R$ 215,00",
	},
];

export default {
	title: "GameCardSlider",
	component: GameCardSlider,
	args: { items },
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			default: "dark",
		},
	},
} as Meta;

export const Default: Story<GameCardSliderProps> = args => (
	<div style={{ maxWidth: "130rem", margin: "0 auto" }}>
		<GameCardSlider {...args} />
	</div>
);
