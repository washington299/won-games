import styled, { css, DefaultTheme } from "styled-components";

import { HeadingProps, LineColors } from ".";

export const wrapperModifier = {
	small: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.medium};

		&::after {
			width: 3rem;
		}
	`,

	medium: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.xlarge};
	`,

	large: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.xxlarge};
	`,

	huge: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.huge};
	`,

	lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
		padding-left: ${theme.spacings.xxsmall};
		border-left: 0.7rem solid ${theme.colors[lineColor]};
	`,

	lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
		position: relative;
		margin-bottom: ${theme.spacings.medium};

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -1rem;
			width: 5rem;
			height: 0.5rem;
			border-bottom: 0.5rem solid ${theme.colors[lineColor]};
		}
	`,
};

export const Wrapper = styled.h2<HeadingProps>`
	${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
		${lineLeft && wrapperModifier.lineLeft(theme, lineColor!)};
		${lineBottom && wrapperModifier.lineBottom(theme, lineColor!)};
		${!!size && wrapperModifier[size](theme)};

		color: ${theme.colors[color!]};
	`}
`;
