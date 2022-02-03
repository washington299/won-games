import { Story, Meta } from "@storybook/react";
import { Settings } from "react-slick";
import styled from "styled-components";

import { Slider } from ".";

export default {
	title: "Slider",
	component: Slider,
} as Meta;

const Slide = styled.div`
	width: 30rem;
	padding: 10rem 0;
	background-color: gray;
	color: red;
	border: 0.1rem solid red;
	text-align: center;
`;

const horizontalSettings: Settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
};

export const Horizontal: Story = () => (
	<Slider settings={horizontalSettings}>
		<Slide>1</Slide>
		<Slide>2</Slide>
		<Slide>3</Slide>
		<Slide>4</Slide>
		<Slide>5</Slide>
		<Slide>6</Slide>
	</Slider>
);

const verticalSettings: Settings = {
	vertical: true,
	verticalSwiping: true,
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export const Vertical: Story = () => (
	<Slider settings={verticalSettings}>
		<Slide>1</Slide>
		<Slide>2</Slide>
		<Slide>3</Slide>
		<Slide>4</Slide>
		<Slide>5</Slide>
		<Slide>6</Slide>
	</Slider>
);
