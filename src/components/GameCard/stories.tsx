import { Story, Meta } from "@storybook/react";

import { GameCard, GameCardProps } from ".";

export default {
	title: "GameCard",
	component: GameCard,
	args: {
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Population Zero",
		subtitle: "Other ocean",
		price: "R$ 215,00",
	},
	argTypes: {
		onFav: {
			action: "clicked",
		},
	},
} as Meta;

export const Default: Story<GameCardProps> = args => <GameCard {...args} />;

export const WithPromotionalPrice: Story<GameCardProps> = args => <GameCard {...args} />;

WithPromotionalPrice.args = {
	promotionalPrice: "R$ 150,00",
};

export const WithRibbon: Story<GameCardProps> = args => <GameCard {...args} />;

WithRibbon.args = {
	ribbonText: "Best seller",
	ribbonColor: "primary",
	ribbonSize: "medium",
};
