import { Story, Meta } from "@storybook/react";

import { Gallery, GalleryProps } from ".";
import mockGallery from "./mock";

export default {
	title: "Gallery",
	component: Gallery,
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			default: "won-dark",
		},
	},
	args: {
		items: mockGallery,
	},
} as Meta;

export const Default: Story<GalleryProps> = args => (
	<div style={{ maxWidth: "130rem", margin: "0 auto" }}>
		<Gallery {...args} />
	</div>
);
