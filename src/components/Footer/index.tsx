import Link from "next/link";

import { Logo } from "components/Logo";
import { Heading } from "components/Heading";

import * as S from "./styles";

export const Footer = () => {
	return (
		<S.Wrapper>
			<Logo color="black" />

			<S.Content>
				<S.Column>
					<Heading size="small" color="black" lineBottom lineColor="secondary">
						Contact
					</Heading>

					<a href="mailto:wongames@mail.com">suporte@wongames.gg</a>
					<a href="tel:+5511999999999">+55 11 99999-9999</a>
				</S.Column>

				<S.Column>
					<Heading size="small" color="black" lineBottom lineColor="secondary">
						Follow us
					</Heading>

					<a href="https://www.instagram.com/won-games">Instagram</a>
					<a href="https://www.twitter.com/won-games">Twitter</a>
					<a href="https://www.youtube.com/won-games">Youtube</a>
					<a href="https://www.facebook.com/won-games">Facebook</a>
				</S.Column>

				<S.Column>
					<Heading size="small" color="black" lineBottom lineColor="secondary">
						Links
					</Heading>

					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/games">
						<a>Explorar</a>
					</Link>
					<Link href="/search">
						<a>Buscar</a>
					</Link>
					<Link href="/faq">
						<a>FAQ</a>
					</Link>
				</S.Column>

				<S.Column>
					<Heading size="small" color="black" lineBottom lineColor="secondary">
						Location
					</Heading>

					<span>Av. Paulista</span>
					<span>527 - 89020330</span>
					<span>São Paulo, Brasil</span>
				</S.Column>
			</S.Content>

			<S.Copyright>Won Games 2020 © All rights reserved</S.Copyright>
		</S.Wrapper>
	);
};
