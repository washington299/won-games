import styled, { css } from "styled-components";
import { darken } from "polished";

import * as TextFieldStyles from "components/TextField/styles";
import * as ButtonStyles from "components/Button/styles";

export const FormWrapper = styled.div`
	${({ theme }) => css`
		${TextFieldStyles.Wrapper} {
			margin: ${theme.spacings.xxsmall} 0;
		}

		${ButtonStyles.Wrapper} {
			margin: ${theme.spacings.xsmall} 0;
		}
	`}
`;

export const FormLink = styled.div`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.black};
		text-align: center;

		a {
			text-decoration: none;
			color: ${theme.colors.secondary};
			border-bottom: 0.1rem solid ${theme.colors.secondary};

			&:hover {
				color: ${darken(0.1, theme.colors.secondary)};
				border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
			}
		}
	`}
`;
