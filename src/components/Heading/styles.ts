import styled, { css, DefaultTheme } from "styled-components";

import { HeadingProps } from ".";

const wrapperModifier = {
	small: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.medium};

		&::after {
			width: 3rem;
		}
	`,

	medium: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.xlarge};
	`,

	lineLeft: (theme: DefaultTheme) => css`
		padding-left: ${theme.spacings.xxsmall};
		border-left: 0.7rem solid ${theme.colors.secondary};
	`,

	lineBottom: (theme: DefaultTheme) => css`
		position: relative;
		margin-bottom: ${theme.spacings.medium};

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -1rem;
			width: 5rem;
			height: 0.5rem;
			border-bottom: 0.5rem solid ${theme.colors.primary};
		}
	`,
};

export const Wrapper = styled.h2<HeadingProps>`
	${({ theme, color, lineLeft, lineBottom, size }) => css`
		${lineLeft && wrapperModifier.lineLeft(theme)};
		${lineBottom && wrapperModifier.lineBottom(theme)};
		${!!size && wrapperModifier[size](theme)};

		color: ${theme.colors[color!]};
	`}
`;
