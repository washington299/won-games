import { Story, Meta } from "@storybook/react";

import { GameInfo, GameInfoProps } from ".";

export default {
	title: "Game/GameInfo",
	component: GameInfo,
	args: {
		title: "Borderlands",
		description:
			"Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.",
		price: "$ 215,00",
	},
	parameters: {
		backgrounds: {
			default: "won-dark",
		},
	},
} as Meta;

export const Default: Story<GameInfoProps> = args => (
	<div style={{ maxWidth: "130rem", margin: "0 auto" }}>
		<GameInfo {...args} />
	</div>
);
