import styled, { css, DefaultTheme } from "styled-components";

import { ButtonProps } from ".";

const wrapperModifier = {
	small: (theme: DefaultTheme) => css`
		height: 3rem;
		font-size: ${theme.font.sizes.xsmall};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
	`,
	medium: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
	`,
	large: (theme: DefaultTheme) => css`
		height: 5rem;
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
	`,
	fullWidth: () => css`
		width: 100%;
	`,
};

export const Wrapper = styled.button<ButtonProps>`
	${({ theme, size, fullWidth }) => css`
		${!!size && wrapperModifier[size](theme)};
		${!!fullWidth && wrapperModifier.fullWidth()};

		background: linear-gradient(180deg, #ff5f5f -15%, #f062c0 100%, #f23131 100%);
		color: ${theme.colors.white};
		border: none;
		border-radius: ${theme.border.radius};
		cursor: pointer;
	`}
`;
