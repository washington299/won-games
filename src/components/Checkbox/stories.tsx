import { Story, Meta } from "@storybook/react";

import { Checkbox } from ".";

export default {
	title: "Form/Checkbox",
	component: Checkbox,
	argTypes: {
		onCheck: {
			action: "checked",
		},
	},
} as Meta;

export const Default: Story = args => <Checkbox {...args} />;

Default.args = {
	label: "Action",
	labelFor: "action",
};

export const MultipleCheckbox: Story = args => (
	<>
		<div style={{ padding: 10 }}>
			<Checkbox {...args} name="category" label="Action" labelFor="action" isChecked />
		</div>
		<div style={{ padding: 10 }}>
			<Checkbox {...args} name="category" label="Adventure" labelFor="adventure" />
		</div>
		<div style={{ padding: 10 }}>
			<Checkbox {...args} name="category" label="Strategy" labelFor="strategy" />
		</div>
	</>
);
