import Link from "next/link";
import { useState } from "react";
import { Menu2 as MenuIcon } from "@styled-icons/remix-line";
import {
	ShoppingCart as ShoppingCartIcon,
	Search as SearchIcon,
	Close as CloseIcon,
} from "@styled-icons/material-outlined";

import { Logo } from "components/Logo";
import { MediaMatch } from "components/MediaMatch";
import Button from "components/Button";

import * as S from "./styles";

export type MenuProps = {
	username?: string;
};

export const Menu = ({ username = "" }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Wrapper>
			<MediaMatch lessThan="medium">
				<S.IconWrapper onClick={() => setIsOpen(true)}>
					<MenuIcon aria-label="Open menu" />
				</S.IconWrapper>
			</MediaMatch>

			<S.LogoWrapper>
				<Logo hideLabel />
			</S.LogoWrapper>

			<MediaMatch greaterThan="medium">
				<S.MenuNav>
					<Link href="/" passHref>
						<S.MenuLink>Home</S.MenuLink>
					</Link>
					<S.MenuLink href="#">Store</S.MenuLink>
				</S.MenuNav>
			</MediaMatch>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="Search" />
				</S.IconWrapper>
				<S.IconWrapper>
					<ShoppingCartIcon aria-label="Open shopping cart" />
				</S.IconWrapper>
				<MediaMatch greaterThan="medium">
					<Link href="/sign-in" passHref>
						<Button size="medium" as="a">
							Sign in
						</Button>
					</Link>
				</MediaMatch>
			</S.MenuGroup>

			<S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
				<CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

				<S.MenuNav>
					<S.MenuLink href="#">Home</S.MenuLink>
					<S.MenuLink href="#">Store</S.MenuLink>

					{!!username && (
						<>
							<S.MenuLink href="#">My account</S.MenuLink>
							<S.MenuLink href="#">Wishlist</S.MenuLink>
						</>
					)}
				</S.MenuNav>

				{!username && (
					<S.RegisterBox>
						<Link href="/sign-in">
							<Button as="a" fullWidth size="large">
								Sign in now
							</Button>
						</Link>
						<span>or</span>
						<Link href="/sign-up">
							<S.CreateAccount title="Sign up">Sign up</S.CreateAccount>
						</Link>
					</S.RegisterBox>
				)}
			</S.MenuFull>
		</S.Wrapper>
	);
};
