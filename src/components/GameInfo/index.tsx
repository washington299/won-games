import { AddShoppingCart, FavoriteBorder } from "@styled-icons/material-outlined";

import Button from "components/Button";
import { Heading } from "components/Heading";
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
			<Heading color="black" lineBottom>
				{title}
			</Heading>
			<S.Description>{description}</S.Description>
			<Ribbon bgColor="secondary">{price}</Ribbon>

			<S.ButtonsWrapper>
				<Button icon={<AddShoppingCart />}>Add to cart</Button>
				<Button minimal icon={<FavoriteBorder />}>
					Wishlist
				</Button>
			</S.ButtonsWrapper>
		</S.Wrapper>
	);
};
