import Link from "next/link";

import { Logo } from "components/Logo";
import { Heading } from "components/Heading";

import * as S from "./styles";

type AuthProps = {
	title: string;
	children: React.ReactNode;
};

export const Auth = ({ title, children }: AuthProps) => {
	return (
		<S.Wrapper>
			<S.BannerBlock>
				<S.BannerContent>
					<Link href="/">
						<a>
							<Logo id="banner" />
						</a>
					</Link>
					<div>
						<Heading size="huge">All your favorite games in one place</Heading>
						<S.BannerSubtitle>
							<strong>WON</strong> is the best and most complete gaming platform.
						</S.BannerSubtitle>
					</div>
					<S.BannerFooter>Won Games 2020 © Todos os Direitos Reservados</S.BannerFooter>
				</S.BannerContent>
			</S.BannerBlock>

			<S.Content>
				<S.ContentWrapper>
					<Link href="/">
						<a>
							<Logo id="content" size="large" color="black" />
						</a>
					</Link>
					<Heading color="black" lineLeft lineColor="secondary">
						{title}
					</Heading>
					{children}
				</S.ContentWrapper>
			</S.Content>
		</S.Wrapper>
	);
};
