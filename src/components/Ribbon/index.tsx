import * as S from "./styles";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "small" | "medium" | "large";

export type RibbonProps = {
	children: React.ReactNode;
	bgColor?: RibbonColors;
	size?: RibbonSizes;
};

export const Ribbon = ({ children, bgColor = "primary", size = "medium" }: RibbonProps) => {
	return (
		<S.Wrapper bgColor={bgColor} size={size}>
			{children}
		</S.Wrapper>
	);
};
