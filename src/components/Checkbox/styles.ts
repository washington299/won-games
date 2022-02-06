import styled, { css } from "styled-components";

import { CheckboxProps } from ".";

export const Wrapper = styled.div`
	display: flex;
`;

export const Input = styled.input`
	${({ theme }) => css`
		appearance: none;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.8rem;
		height: 1.8rem;
		border: 0.2rem solid ${theme.colors.darkGray};
		border-radius: 0.2rem;
		position: relative;
		transition: background border ${theme.transition.fast};
		outline: none;
		cursor: pointer;

		&:before {
			content: "";
			width: 0.6rem;
			height: 1rem;
			border: 0.2rem solid ${theme.colors.white};
			border-top: 0;
			border-left: 0;
			transform: rotate(45deg);
			position: absolute;
			top: 0rem;
			transition: ${theme.transition.fast};
			opacity: 0;
		}

		&:focus {
			box-shadow: 0 0 0.5rem ${theme.colors.primary};
		}

		&:checked {
			border-color: ${theme.colors.primary};
			background: ${theme.colors.primary};

			&:before {
				opacity: 1;
			}
		}
	`}
`;

type LabelProps = Pick<CheckboxProps, "labelColor">;

export const Label = styled.label<LabelProps>`
	${({ theme, labelColor }) => css`
		margin-left: ${theme.spacings.xxsmall};
		color: ${theme.colors[labelColor!]};
		cursor: pointer;
		line-height: 1.9rem;
	`}
`;
