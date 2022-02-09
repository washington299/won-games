import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

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

export const Input = styled.input`
	${({ theme }) => css`
		width: 100%;
		margin-left: ${theme.spacings.xxsmall};
		padding: ${theme.spacings.xxsmall} 0;
		color: ${theme.colors.black};
		font-family: ${theme.font.family};
		font-size: ${theme.font.sizes.medium};
		background: transparent;
		border: 0;
		outline: none;
	`}
`;

export const Icon = styled.div`
	${({ theme }) => css`
		width: 2.2rem;
		display: flex;
		color: ${theme.colors.gray};

		& > svg {
			width: 100%;
		}
	`}
`;
