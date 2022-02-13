import { Container } from "components/Container";
import { Menu } from "components/Menu";
import { Footer } from "components/Footer";

import * as S from "./styles";

export type BaseTemplateProps = {
	children: React.ReactNode;
};

export const BaseTemplate = ({ children }: BaseTemplateProps) => {
	return (
		<section>
			<Container>
				<Menu />
			</Container>

			{children}

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</section>
	);
};
