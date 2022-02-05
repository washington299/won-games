import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";

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
		svg {
			& + span {
				margin-left: ${theme.spacings.xxsmall};
			}
		}
	`,
	minimal: (theme: DefaultTheme) => css`
		background: none;
		color: ${theme.colors.primary};

		&:hover {
			color: ${darken(0.2, theme.colors.primary)};
		}
	`,
};

type WrapperProps = { hasIcon: boolean } & Pick<ButtonProps, "size" | "fullWidth" | "minimal">;

export const Wrapper = styled.button<WrapperProps>`
	${({ theme, size, fullWidth, hasIcon, minimal }) => css`
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(180deg, #ff5f5f -15%, #f062c0 100%, #f23131 100%);
		color: ${theme.colors.white};
		border: none;
		border-radius: ${theme.border.radius};
		cursor: pointer;
		text-decoration: none;

		&:hover {
			background: ${minimal
				? "none"
				: `linear-gradient(180deg, #e35565 0%, #d958a6 100%),
				linear-gradient(178.59deg, #ff5f5f -14.51%, #f062c0 102.86%, #f23131 102.86%)`};
		}

		${!!size && wrapperModifier[size](theme)};
		${!!fullWidth && wrapperModifier.fullWidth()};
		${!!hasIcon && wrapperModifier.withICon(theme)};
		${!!minimal && wrapperModifier.minimal(theme)};
	`}
`;
