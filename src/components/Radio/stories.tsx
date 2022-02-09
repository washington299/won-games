import { Story, Meta } from "@storybook/react";

import { Radio, RadioProps } from ".";

export default {
	title: "Form/Radio",
	component: Radio,
	argTypes: {
		onCheck: { action: "checked" },
	},
} as Meta;

export const Default: Story<RadioProps> = args => <Radio {...args} />;

Default.args = {
	label: "Label",
	labelFor: "label",
};

export const DefaultChecked: Story<RadioProps> = args => <Radio {...args} />;

DefaultChecked.args = {
	label: "Label",
	labelFor: "label",
	defaultChecked: true,
};

export const MultipleRadio: Story<RadioProps> = args => (
	<>
		<div style={{ padding: 10 }}>
			<Radio {...args} name="counts" label="First" labelFor="first" value="first" defaultChecked />
		</div>
		<div style={{ padding: 10 }}>
			<Radio {...args} name="counts" label="Second" labelFor="second" value="second" />
		</div>
		<div style={{ padding: 10 }}>
			<Radio {...args} name="counts" label="Third" labelFor="third" value="third" />
		</div>
	</>
);
