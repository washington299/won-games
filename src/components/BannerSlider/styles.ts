import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as BannerStyles from "components/Banner/styles";

export const Wrapper = styled.section`
	${({ theme }) => css`
		.slick-dots {
			display: flex !important;
			align-items: center;
			justify-content: center;
			margin-top: ${theme.spacings.small};
			list-style: none;

			li {
				width: 1.2rem;
				height: 1.2rem;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 ${theme.spacings.xxsmall};
				background-color: ${theme.colors.white};
				border-radius: 100%;
				cursor: pointer;

				&.slick-active {
					background-color: ${theme.colors.primary};
				}
			}

			button {
				opacity: 0;
				cursor: pointer;
			}
		}

		${media.greaterThan("large")`
			${BannerStyles.Wrapper} {
				max-width: 104rem;
				margin: 0 auto;
			}

			.slick-dots {
				position: absolute;
				top: 0;
				right: 0;
				flex-direction: column;
				height: 100%;
				margin: 0;

				li {
					margin: ${theme.spacings.xxsmall} 0;
				}
			}
		`}
	`}
`;
