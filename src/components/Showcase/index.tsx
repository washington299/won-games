import { Heading } from "components/Heading";
import { Highlight, HightlightProps } from "components/Highlight";
import { GameCardSlider } from "components/GameCardSlider";
import { GameCardProps } from "components/GameCard";

import * as S from "./styles";

export type ShowcaseProps = {
	title?: string;
	highlight?: HightlightProps;
	games?: GameCardProps[];
};

export const Showcase = ({ title, highlight, games }: ShowcaseProps) => {
	return (
		<S.Wrapper>
			{!!title && (
				<Heading lineLeft lineColor="secondary">
					{title}
				</Heading>
			)}
			{!!highlight && <Highlight {...highlight} />}
			{!!games && <GameCardSlider items={games} arrowColor="white" />}
		</S.Wrapper>
	);
};
