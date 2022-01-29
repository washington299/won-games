import { Button } from "components/Button";
import { Ribbon, RibbonSizes, RibbonColors } from "components/Ribbon";

import * as S from "./styles";

export type BannerProps = {
	img: string;
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
	ribbonText?: React.ReactNode;
	ribbonSize?: RibbonSizes;
	ribbonColor?: RibbonColors;
};

export const Banner = ({
	img,
	title,
	subtitle,
	buttonLabel,
	buttonLink,
	ribbonText,
	ribbonSize = "medium",
	ribbonColor = "primary",
}: BannerProps) => {
	return (
		<S.Wrapper>
			{!!ribbonText && (
				<Ribbon size={ribbonSize} bgColor={ribbonColor}>
					{ribbonText}
				</Ribbon>
			)}
			<S.Image src={img} role="img" aria-label={title} />
			<S.Caption>
				<S.Title>{title}</S.Title>
				<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
				<Button as="a" href={buttonLink} size="large">
					{buttonLabel}
				</Button>
			</S.Caption>
		</S.Wrapper>
	);
};
