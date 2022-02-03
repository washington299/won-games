import { Settings } from "react-slick";
import {
	ArrowBackIos as ArrowLeft,
	ArrowForwardIos as ArrowRight,
} from "@styled-icons/material-outlined";

import { Slider } from "components/Slider";
import { GameCard, GameCardProps } from "components/GameCard";

import * as S from "./styles";

const settings: Settings = {
	slidesToShow: 4,
	infinite: false,
	lazyLoad: "ondemand",
	prevArrow: <ArrowLeft aria-label="previous games" />,
	nextArrow: <ArrowRight aria-label="next games" />,
	responsive: [
		{
			breakpoint: 1375,
			settings: {
				arrows: false,
				slidesToShow: 3.2,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 2.2,
			},
		},
		{
			breakpoint: 570,
			settings: {
				arrows: false,
				slidesToShow: 1.2,
			},
		},
		{
			breakpoint: 375,
			settings: {
				arrows: false,
				slidesToShow: 1.1,
			},
		},
	],
};

export type GameCardSliderProps = {
	items: GameCardProps[];
	arrowColor?: "white" | "black";
};

export const GameCardSlider = ({ items, arrowColor = "black" }: GameCardSliderProps) => {
	return (
		<S.Wrapper arrowColor={arrowColor}>
			<Slider settings={settings}>
				{items.map(item => (
					<GameCard key={item.title} {...item} />
				))}
			</Slider>
		</S.Wrapper>
	);
};
