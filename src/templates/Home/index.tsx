import { Container } from "components/Container";
import { Heading } from "components/Heading";
import { Menu } from "components/Menu";
import { Footer } from "components/Footer";

import * as S from "./styles";

export const HomeTemplate = () => {
	return (
		<S.Wrapper>
			<Container>
				<Menu />
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary" color="black">
					News
				</Heading>
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary">
					Most popular
				</Heading>
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary">
					Upcoming
				</Heading>
			</Container>

			<Container>
				<Heading lineLeft lineColor="secondary">
					Free games
				</Heading>
			</Container>

			<Container>
				<Footer />
			</Container>
		</S.Wrapper>
	);
};
