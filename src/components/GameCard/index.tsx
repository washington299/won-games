import { FavoriteBorder, Favorite, AddShoppingCart } from "@styled-icons/material-outlined";

import { Button } from "components/Button";
import { Ribbon, RibbonColors, RibbonSizes } from "components/Ribbon";

import * as S from "./styles";

export type GameCardProps = {
	img: string;
	title: string;
	subtitle: string;
	price: string;
	promotionalPrice?: string;
	favorite?: boolean;
	ribbonText?: string;
	ribbonColor?: RibbonColors;
	ribbonSize?: RibbonSizes;
	onFav?: () => void;
};

export const GameCard = ({
	img,
	title,
	subtitle,
	price,
	promotionalPrice,
	favorite = false,
	ribbonText,
	ribbonColor,
	ribbonSize,
	onFav,
}: GameCardProps) => {
	return (
		<S.Wrapper>
			{!!ribbonText && (
				<Ribbon bgColor={ribbonColor} size={ribbonSize}>
					{ribbonText}
				</Ribbon>
			)}

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
