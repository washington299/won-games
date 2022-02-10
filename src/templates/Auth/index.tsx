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
				<Logo />
				<Heading>All your favorite games in one place</Heading>
				<S.BannerSubtitle>
					<strong>WON</strong> is the best and most complete gaming platform.
				</S.BannerSubtitle>
				<S.BannerFooter>Won Games 2020 © Todos os Direitos Reservados</S.BannerFooter>
			</S.BannerBlock>

			<S.Content>
				<Logo size="large" color="black" />
				<Heading color="black" lineLeft lineColor="secondary">
					{title}
				</Heading>
				{children}
			</S.Content>
		</S.Wrapper>
	);
};
