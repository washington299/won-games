import styled, { css } from "styled-components";

import * as LogoStyles from "components/Logo/styles";
import * as HeadingStyles from "components/Heading/styles";

export const Wrapper = styled.main`
	${() => css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: 100vh;
	`}
`;

export const BannerBlock = styled.section`
	${({ theme }) => css`
		position: relative;
		background: url(/auth-background.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge} ${theme.spacings.small};

		&:after {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.75);
		}
	`}
`;

export const BannerContent = styled.div`
	${({ theme }) => css`
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		color: ${theme.colors.white};
		position: relative;
		z-index: ${theme.layers.base};
	`}
`;

export const BannerSubtitle = styled.h4`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xlarge};
		font-weight: ${theme.font.light};

		& > strong {
			color: ${theme.colors.primary};
		}
	`}
`;

export const BannerFooter = styled.p`
	${({ theme }) => css`
		align-self: end;
		font-size: ${theme.font.sizes.xsmall};
		text-align: center;
	`}
`;

export const Content = styled.section`
	${({ theme }) => css`
		display: grid;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.white};
	`}
`;

export const ContentWrapper = styled.div`
	${({ theme }) => css`
		width: 30rem;

		${LogoStyles.Wrapper} {
			margin: 0 auto ${theme.spacings.xxlarge};
		}

		${HeadingStyles.Wrapper} {
			margin-bottom: ${theme.spacings.medium};
		}
	`}
`;
