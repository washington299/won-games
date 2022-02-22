import { Story, Meta } from "@storybook/react";

import { GameDetails, GameDetailsProps } from ".";

export default {
	title: "GameDetails",
	component: GameDetails,
	parameters: {
		backgrounds: {
			default: "won-dark",
		},
	},
} as Meta;

export const Default: Story<GameDetailsProps> = args => (
	<div style={{ maxWidth: "130rem", margin: "0 auto" }}>
		<GameDetails {...args} />
	</div>
);

Default.args = {
	platforms: ["windows", "linux", "mac"],
};
