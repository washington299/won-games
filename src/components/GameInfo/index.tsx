import { AddShoppingCart, FavoriteBorder } from "@styled-icons/material-outlined";

import Button from "components/Button";
import { Ribbon } from "components/Ribbon";

import * as S from "./styles";

export type GameInfoProps = {
	title: string;
	description: string;
	price: string;
};

export const GameInfo = ({ title, description, price }: GameInfoProps) => {
	return (
		<S.Wrapper>
			<h1>{title}</h1>
			<p>{description}</p>
			<Ribbon bgColor="secondary">{price}</Ribbon>

			<Button icon={<AddShoppingCart />}>Add to cart</Button>
			<Button minimal icon={<FavoriteBorder />}>
				Wishlist
			</Button>
		</S.Wrapper>
	);
};
