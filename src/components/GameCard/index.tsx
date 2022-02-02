import { FavoriteBorder, Favorite, AddShoppingCart } from "@styled-icons/material-outlined";

import { Button } from "components/Button";

import * as S from "./styles";

export type GameCardProps = {
	img: string;
	title: string;
	subtitle: string;
	price: string;
	promotionalPrice?: string;
	favorite?: boolean;
	onFav?: () => void;
};

export const GameCard = ({
	img,
	title,
	subtitle,
	price,
	promotionalPrice,
	favorite = false,
	onFav,
}: GameCardProps) => {
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
				<S.FavIcon role="button" onClick={onFav}>
					{favorite ? (
						<Favorite aria-label="Remove from wishlist" />
					) : (
						<FavoriteBorder aria-label="Add to wishlist" />
					)}
				</S.FavIcon>

				<S.BuyBox>
					{!!promotionalPrice && <S.Price isPromotional={!!promotionalPrice}>{price}</S.Price>}
					<S.Price>{promotionalPrice || price}</S.Price>
					<Button icon={<AddShoppingCart />} size="small" />
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
};
