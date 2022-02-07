import styled, { css } from "styled-components";

import { RadioProps } from ".";

export const Wrapper = styled.div`
	display: flex;
`;

export const Input = styled.input`
	${({ theme }) => css`
		appearance: none;
		width: 1.8rem;
		height: 1.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		border: 0.2rem solid ${theme.colors.primary};
		border-radius: 50%;
		transition: background ${theme.transition.fast};
		position: relative;
		outline: none;
		cursor: pointer;

		&:before {
			content: "";
			width: 0.8rem;
			height: 0.8rem;
			background-color: ${theme.colors.primary};
			border-radius: 50%;
			opacity: 0;
			transition: opacity ${theme.transition.fast};
			position: absolute;
		}

		&:focus {
			box-shadow: 0 0 0.5rem ${theme.colors.primary};
		}

		&:checked {
			&:before {
				opacity: 1;
			}
		}
	`}
`;

type LabelProps = Pick<RadioProps, "labelColor">;

export const Label = styled.label<LabelProps>`
	${({ theme, labelColor }) => css`
		margin-left: ${theme.spacings.xxsmall};
		color: ${theme.colors[labelColor!]};
		line-height: 1.9rem;
		cursor: pointer;
	`}
`;
