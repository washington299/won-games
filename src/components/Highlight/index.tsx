import { Button } from "components/Button";

import * as S from "./styles";

export type HightlightProps = {
	title: string;
	subtitle: string;
	backgroundImage: string;
	floatImage?: string;
	buttonLabel: string;
	buttonLink: string;
};

export const Highlight = ({
	title,
	subtitle,
	backgroundImage,
	floatImage,
	buttonLabel,
	buttonLink,
}: HightlightProps) => {
	return (
		<S.Wrapper backgroundImage={backgroundImage}>
			{!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
			<S.Content>
				<S.Title>{title}</S.Title>
				<S.Subtitle>{subtitle}</S.Subtitle>
				<Button as="a" href={buttonLink}>
					{buttonLabel}
				</Button>
			</S.Content>
		</S.Wrapper>
	);
};
