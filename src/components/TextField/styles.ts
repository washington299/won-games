import styled, { css, DefaultTheme } from "styled-components";

import { TextFieldProps } from ".";

type WrapperProps = Pick<TextFieldProps, "disabled"> & { error?: boolean };

const wrapperModifier = {
	disabled: (theme: DefaultTheme) => css`
		${Label},
		${Icon},
		${Input} {
			color: ${theme.colors.gray};
			cursor: not-allowed;

			&::placeholder {
				color: currentColor;
			}
		}
	`,
	error: (theme: DefaultTheme) => css`
		${Label},
		${Icon} {
			color: ${theme.colors.red};
		}

		${InputWrapper} {
			border-color: ${theme.colors.red};
		}
	`,
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, disabled, error }) => css`
		${!!disabled && wrapperModifier.disabled(theme)};
		${!!error && wrapperModifier.error(theme)};
	`}
`;

export const Label = styled.label`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.black};
		cursor: pointer;
	`}
`;

export const InputWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		background: ${theme.colors.lightGray};
		border: 0.2rem solid ${theme.colors.lightGray};
		border-radius: 0.2rem;
		padding: 0 ${theme.spacings.xsmall};

		&:focus-within {
			box-shadow: 0 0 0.5rem ${theme.colors.primary};
		}
	`}
`;

type IconPositionProp = Pick<TextFieldProps, "iconPosition">;

export const Input = styled.input<IconPositionProp>`
	${({ theme, iconPosition }) => css`
		width: 100%;
		padding: ${theme.spacings.xxsmall} 0;
		padding-${iconPosition}: ${theme.spacings.xxsmall};
		color: ${theme.colors.black};
		font-family: ${theme.font.family};
		font-size: ${theme.font.sizes.medium};
		background: transparent;
		border: 0;
		outline: none;

		&:disabled {
			cursor: not-allowed;
		}

		&:-webkit-autofill {
			-webkit-background-clip: text;
		}
	`}
`;

export const Icon = styled.div<IconPositionProp>`
	${({ theme, iconPosition }) => css`
		width: 2.2rem;
		display: flex;
		color: ${theme.colors.gray};
		order: ${iconPosition === "right" ? 1 : 0};

		& > svg {
			width: 100%;
		}
	`}
`;

export const Error = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xsmall};
		color: ${theme.colors.red};
	`}
`;
