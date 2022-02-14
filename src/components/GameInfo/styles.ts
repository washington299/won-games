import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "components/Heading/styles";
import * as RibbonStyles from "components/Ribbon/styles";

export const Wrapper = styled.section`
	${({ theme }) => css`
		position: relative;
		padding: ${theme.spacings.small} ${theme.spacings.small} ${theme.spacings.xxsmall};
		background-color: ${theme.colors.white};

		${HeadingStyles.Wrapper} {
			width: 75%;
		}

		${RibbonStyles.Wrapper} {
			right: -1rem;

			&:before {
				border-right-width: 1rem;
			}
		}

		${media.greaterThan("medium")`
			padding: ${theme.spacings.small} ${theme.spacings.medium};

			${RibbonStyles.Wrapper} {
				right: ${theme.spacings.small};
				top: ${theme.spacings.small};
				font-size: ${theme.font.sizes.large};

				&:before {
					border: none;
				}
			}
		`}
	`}
`;

export const Description = styled.p`
	${({ theme }) => css`
		margin-bottom: ${theme.spacings.small};
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.gray};

		${media.greaterThan("medium")`
			max-width: 77rem;
		`}
	`}
`;

export const ButtonsWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;

		> button {
			width: 100%;
			margin-bottom: ${theme.spacings.xxsmall};
		}

		${media.greaterThan("medium")`
			flex-direction: row-reverse;

			> button {
				width: initial;
				margin-bottom: 0;
			}
		`}
	`}
`;
