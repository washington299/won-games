import styled, { css } from "styled-components";

export const ForgotPassword = styled.a`
	${({ theme }) => css`
		display: block;
		color: ${theme.colors.black};
		font-size: ${theme.font.sizes.small};
		text-align: right;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	`}
`;
