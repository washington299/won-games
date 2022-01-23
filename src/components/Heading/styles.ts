import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";

import { HeadingProps } from ".";

const wrapperModifier = {
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
	${({ theme, color, lineLeft, lineBottom }) => css`
		${lineLeft && wrapperModifier.lineLeft(theme)};
		${lineBottom && wrapperModifier.lineBottom(theme)};

		color: ${theme.colors[color!]};
		font-size: ${theme.font.sizes.xlarge};

		${media.greaterThan("medium")`
			font-size: ${theme.font.sizes.xxlarge};
		`}
	`}
`;