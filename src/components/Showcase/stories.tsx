import { Story, Meta } from "@storybook/react";

import { item as hightlightMock } from "components/Highlight/mock";
import { items as gamesMock } from "components/GameCardSlider/mock";

import { Showcase, ShowcaseProps } from ".";

export default {
	title: "Showcase",
	component: Showcase,
	decorators: [
		Story => (
			<div style={{ margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			default: "won-dark",
		},
	},
} as Meta;

export const Default: Story<ShowcaseProps> = args => <Showcase {...args} />;

Default.args = {
	title: "Most Populars",
	highlight: hightlightMock,
	games: gamesMock,
};

export const WithoutTitle: Story<ShowcaseProps> = args => <Showcase {...args} />;

WithoutTitle.args = {
	highlight: hightlightMock,
	games: gamesMock,
};

export const WithoutHighlight: Story<ShowcaseProps> = args => <Showcase {...args} />;

WithoutHighlight.args = {
	title: "Most Populars",
	games: gamesMock,
};

export const WithoutGames: Story<ShowcaseProps> = args => <Showcase {...args} />;

WithoutGames.args = {
	title: "Most Populars",
	highlight: hightlightMock,
};
