import Slider, { SliderSettings } from "components/Slider";
import { Banner, BannerProps } from "components/Banner";

import * as S from "./styles";

export type BannerSliderProps = {
	items: BannerProps[];
};

const settings: SliderSettings = {
	dots: true,
	arrows: false,
	infinite: false,
	vertical: true,
	verticalSwiping: true,
	responsive: [
		{
			breakpoint: 1170,
			settings: {
				vertical: false,
				verticalSwiping: false,
			},
		},
	],
};

export const BannerSlider = ({ items }: BannerSliderProps) => {
	return (
		<S.Wrapper>
			<Slider settings={settings}>
				{items.map(item => (
					<Banner key={item.title} {...item} />
				))}
			</Slider>
		</S.Wrapper>
	);
};
