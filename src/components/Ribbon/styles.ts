import styled, { css, DefaultTheme } from "styled-components";

import { RibbonProps, RibbonColors } from ".";

const wrapperModifier = {
	bgColor: (theme: DefaultTheme, color: RibbonColors) => css`
		background-color: ${theme.colors[color]};
	`,
	small: (theme: DefaultTheme) => css`
		height: 2.4rem;
		font-size: ${theme.font.sizes.xsmall};
	`,
	medium: (theme: DefaultTheme) => css`
		height: 3.3rem;
		font-size: ${theme.font.sizes.small};
	`,
	large: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.medium};
	`,
};

type WrapperProps = Omit<RibbonProps, "children">;

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, bgColor, size }) => css`
		${!!size && wrapperModifier[size](theme)};
		${!!bgColor && wrapperModifier.bgColor(theme, bgColor)};
	`}
`;
