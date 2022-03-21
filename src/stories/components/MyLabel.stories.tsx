import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel/MyLabel";

export default {
	title: "UI/MyLabel",
	component: MyLabel,
	argTypes: {
		color: { control: "select" }, // Si quiero especificar el control selector que deseo que storybook use para este atributo
		background: { control: "color" },
	},
} as ComponentMeta<typeof MyLabel>;

//La plantilla de nuestro componente
// internamente esta función sabe que args de del mismo tipo de la interface usada para
// tipar las properties del componente, basta con export esa interface
const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

//Las variaciones de nuestro componente, que son visibles desde storybook
export const Basic = Template.bind({});
Basic.args = {
	label: "hola mundo",
	size: "normal",
	color: "primary",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	label: "hola mundo",
	size: "normal",
	allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "hola mundo",
	size: "normal",
	color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	label: "hola mundo",
	size: "normal",
	color: "tertiary",
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
	label: "hola mundo",
	size: "h1",
	italic: true,
	background: "#6EC64F",
};
