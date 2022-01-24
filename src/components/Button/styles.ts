import styled, { css, DefaultTheme } from "styled-components";

import { ButtonProps } from ".";

const wrapperModifier = {
	small: (theme: DefaultTheme) => css`
		height: 3rem;
		font-size: ${theme.font.sizes.xsmall};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

		svg {
			width: 1.5rem;
		}
	`,
	medium: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

		svg {
			width: 2rem;
		}
	`,
	large: (theme: DefaultTheme) => css`
		height: 5rem;
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

		svg {
			width: 2.5rem;
		}
	`,
	fullWidth: () => css`
		width: 100%;
	`,
	withICon: (theme: DefaultTheme) => css`
		display: inline-flex;
		justify-content: center;
		align-items: center;

		svg {
			& + span {
				margin-left: ${theme.spacings.xxsmall};
			}
		}
	`,
};

export const Wrapper = styled.button<{ hasIcon: boolean } & ButtonProps>`
	${({ theme, size, fullWidth, hasIcon }) => css`
		${!!size && wrapperModifier[size](theme)};
		${!!fullWidth && wrapperModifier.fullWidth()};
		${!!hasIcon && wrapperModifier.withICon(theme)}

		background: linear-gradient(180deg, #ff5f5f -15%, #f062c0 100%, #f23131 100%);
		color: ${theme.colors.white};
		border: none;
		border-radius: ${theme.border.radius};
		cursor: pointer;
	`}
`;
