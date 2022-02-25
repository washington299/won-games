import { Settings } from "react-slick";
import {
	ArrowBackIos as ArrowLeft,
	ArrowForwardIos as ArrowRight,
} from "@styled-icons/material-outlined";

import { Slider } from "components/Slider";

import * as S from "./styles";
import { useState } from "react";

const settings: Settings = {
	arrows: true,
	slidesToShow: 4,
	infinite: false,
	lazyLoad: "ondemand",
	prevArrow: <ArrowLeft aria-label="previous image" />,
	nextArrow: <ArrowRight aria-label="next image" />,
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
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1.2,
			},
		},
	],
};

type GalleryImageProps = {
	src: string;
	alt: string;
};

export type GalleryProps = {
	items: GalleryImageProps[];
};

export const Gallery = ({ items }: GalleryProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<S.Wrapper>
			<Slider settings={settings}>
				{items.map(item => (
					<img
						key={item.src}
						role="button"
						src={item.src}
						alt={item.alt}
						onClick={() => setIsModalOpen(true)}
					/>
				))}
			</Slider>

			<S.Modal aria-label="modal" aria-hidden={!isModalOpen} isOpen={isModalOpen}></S.Modal>
		</S.Wrapper>
	);
};
