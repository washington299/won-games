import { Story, Meta } from "@storybook/react";

import { GameCard, GameCardProps } from ".";

export default {
	title: "GameCard",
	component: GameCard,
	args: {
		img: "/gameCard-img.png",
		title: "Population Zero",
		subtitle: "Other ocean",
		price: "R$ 215,00",
	},
} as Meta;

export const Default: Story<GameCardProps> = args => <GameCard {...args} />;
