import { useState } from "react";
import { Menu2 as MenuIcon } from "@styled-icons/remix-line";
import {
	ShoppingCart as ShoppingCartIcon,
	Search as SearchIcon,
	Close as CloseIcon,
} from "@styled-icons/material-outlined";

import { Logo } from "components/Logo";

import * as S from "./styles";

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Wrapper>
			<S.IconWrapper onClick={() => setIsOpen(true)}>
				<MenuIcon aria-label="Open menu" />
			</S.IconWrapper>

			<S.LogoWrapper>
				<Logo hideLabel />
			</S.LogoWrapper>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="Search" />
				</S.IconWrapper>
				<S.IconWrapper>
					<ShoppingCartIcon aria-label="Open shopping cart" />
				</S.IconWrapper>
			</S.MenuGroup>

			<S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
				<CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
			</S.MenuFull>
		</S.Wrapper>
	);
};
