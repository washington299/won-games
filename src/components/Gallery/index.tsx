import { useEffect, useState, useRef } from "react";
import SlickSlider, { Settings } from "react-slick";
import {
	Close as CloseIcon,
	ArrowBackIos as ArrowLeft,
	ArrowForwardIos as ArrowRight,
} from "@styled-icons/material-outlined";

import Slider from "components/Slider";

import * as S from "./styles";

const commonSettings: Settings = {
	infinite: false,
	lazyLoad: "ondemand",
	arrows: true,
	prevArrow: <ArrowLeft aria-label="previous image" />,
	nextArrow: <ArrowRight aria-label="next image" />,
};

const settings: Settings = {
	...commonSettings,
	slidesToShow: 4,
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

const modalSettings: Settings = {
	...commonSettings,
	slidesToShow: 1,
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

	const slider = useRef<SlickSlider>(null);

	useEffect(() => {
		const handleKeyUp = ({ key }: KeyboardEvent) => key === "Escape" && setIsModalOpen(false);

		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, []);

	return (
		<S.Wrapper>
			<Slider ref={slider} settings={settings}>
				{items.map((item, index) => (
					<img
						key={item.src}
						role="button"
						src={item.src}
						alt={item.alt}
						onClick={() => {
							setIsModalOpen(true);
							slider.current!.slickGoTo(index, true);
						}}
					/>
				))}
			</Slider>

			<S.Modal aria-label="modal" aria-hidden={!isModalOpen} isOpen={isModalOpen}>
				<S.Close role="button" aria-label="Close modal" onClick={() => setIsModalOpen(false)}>
					<CloseIcon size={40} />
				</S.Close>

				<S.Content>
					<Slider ref={slider} settings={modalSettings}>
						{items.map(item => (
							<img key={item.src} src={item.src} alt={item.alt} />
						))}
					</Slider>
				</S.Content>
			</S.Modal>
		</S.Wrapper>
	);
};
