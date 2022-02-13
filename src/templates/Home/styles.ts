import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "components/Heading/styles";

export const BannerSection = styled.section`
	${({ theme }) => css`
		margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

		${media.greaterThan("medium")`
			margin: ${theme.spacings.large} 0;
			position: relative;
			z-index: ${theme.layers.base};
		`}
	`}
`;

export const SectionNews = styled.div`
	${({ theme }) => css`
		margin-bottom: calc(${theme.spacings.xxlarge} * 2);

		${media.greaterThan("medium")`
			margin-bottom: 0;
			padding-top: 14rem;
			padding-bottom: 10rem;
			background-color: ${theme.colors.lightBg};
			clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

			${HeadingStyles.Wrapper} {
				color: ${theme.colors.black};
			}
		`}

		${media.greaterThan("large")`
			margin-top: -13rem;
		`}
	`}
`;

export const SectionFooter = styled.section`
	${({ theme }) => css`
		margin-top: ${theme.spacings.large};
		padding-top: ${theme.spacings.xxlarge};
		padding-bottom: ${theme.spacings.xsmall};
		background-color: ${theme.colors.white};
		clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);

		${media.greaterThan("medium")`
			padding-top: calc(${theme.spacings.xxlarge} * 2);
			clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
		`}
	`}
`;
