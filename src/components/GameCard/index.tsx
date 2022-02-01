import { FavoriteBorder } from "@styled-icons/material-outlined";

import * as S from "./styles";

export type GameCardProps = {
	img: string;
	title: string;
	subtitle: string;
	price: string;
};

export const GameCard = ({ img, title, subtitle, price }: GameCardProps) => {
	return (
		<S.Wrapper>
			<S.Image src={img} alt={title} />
			<S.Title>{title}</S.Title>
			<S.Subtitle>{subtitle}</S.Subtitle>
			<S.FavIcon role="button">
				<FavoriteBorder aria-label="Add to wishlist" />
			</S.FavIcon>
			<S.Price>{price}</S.Price>
		</S.Wrapper>
	);
};
