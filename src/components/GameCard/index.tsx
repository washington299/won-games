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
			<S.ImageBox>
				<img src={img} alt={title} />
			</S.ImageBox>
			<S.Content>
				<S.Info>
					<S.Title>{title}</S.Title>
					<S.Subtitle>{subtitle}</S.Subtitle>
				</S.Info>
				<S.FavIcon role="button">
					<FavoriteBorder aria-label="Add to wishlist" />
				</S.FavIcon>

				<S.BuyBox>
					<S.Price>{price}</S.Price>
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
};
