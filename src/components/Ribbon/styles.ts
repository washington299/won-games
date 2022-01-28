import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";

import { RibbonProps, RibbonColors } from ".";

const wrapperModifier = {
	bgColor: (theme: DefaultTheme, color: RibbonColors) => css`
		background-color: ${theme.colors[color]};

		&::before {
			border-left-color: ${darken(0.2, theme.colors[color])};
			border-top-color: ${darken(0.2, theme.colors[color])};
		}
	`,
	small: (theme: DefaultTheme) => css`
		height: 2.4rem;
		font-size: ${theme.font.sizes.xsmall};
		padding: 0 ${theme.spacings.xsmall};
		right: -1.5rem;

		&::before {
			top: 2.4rem;
			border-top-width: 0.7rem;
			border-right-width: 1.5rem;
		}
	`,
	medium: (theme: DefaultTheme) => css`
		height: 3.3rem;
		font-size: ${theme.font.sizes.small};
		padding: 0 ${theme.spacings.small};
		right: -1.5rem;

		&::before {
			top: 3.3rem;
			border-top-width: 0.7rem;
			border-right-width: 1.5rem;
		}
	`,
	large: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.medium};
		padding: 0 ${theme.spacings.medium};
		right: -1.5rem;

		&::before {
			top: 4rem;
			border-top-width: 0.7rem;
			border-right-width: 1.5rem;
		}
	`,
};

type WrapperProps = Omit<RibbonProps, "children">;

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, bgColor, size }) => css`
		${!!size && wrapperModifier[size](theme)};
		${!!bgColor && wrapperModifier.bgColor(theme, bgColor)};

		display: flex;
		align-items: center;
		position: absolute;
		top: ${theme.spacings.xsmall};
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};

		&::before {
			content: "";
			position: absolute;
			right: 0;
			border-style: solid;
			border-left-width: 0;
			border-bottom-width: 0;
			border-bottom-color: transparent;
			border-right-color: transparent;
		}
	`}
`;
