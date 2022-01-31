/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";
import media from "styled-media-query";

import { HightlightProps } from ".";

type WrapperProps = Pick<HightlightProps, "backgroundImage" | "alignment">;

const wrapperModifier = {
	left: () => css`
		grid-template-areas: 'content floatImage';
		grid-template-columns: 2fr 1.3fr;

		${Content} {
			text-align: left;
		}

		${FloatImage} {
			justify-self: end;
		}
	`,
	right: () => css`
		grid-template-areas: 'floatImage content';
		grid-template-columns: 1.3fr 2fr;

		${Content} {
			text-align: right;
		}
	`,
};

export const Wrapper = styled.section<WrapperProps>`
	${({ backgroundImage, alignment }) => css`
		height: 23rem;
		position: relative;
		background-image: url(${backgroundImage});
		background-position: center center;
		background-size: cover;
		display: grid;


		&::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.6);
		}

		${media.greaterThan("medium")`
			height: 32rem;
		`}

		${wrapperModifier[alignment!]()};
	`}
`;

export const FloatImage = styled.img`
	${({ theme }) => css`
		max-height: 23rem;
		max-width: 100%;
		grid-area: floatImage;
		align-self: end;
		z-index: ${theme.layers.base};

		${media.greaterThan("medium")`
			max-height: 32rem;
		`}
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		grid-area: content;
		padding: ${theme.spacings.xsmall};
		z-index: ${theme.layers.base};

		${media.greaterThan("medium")`
			align-self: end;
			padding: ${theme.spacings.large};
		`}
	`}
`;

export const Title = styled.h2`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.large};
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};

		${media.greaterThan("medium")`
			font-size: ${theme.font.sizes.xxlarge};
		`}
	`}
`;

export const Subtitle = styled.h3`
	${({ theme }) => css`
		margin-bottom: ${theme.spacings.small};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.light};
		color: ${theme.colors.white};

		${media.greaterThan("medium")`
			font-size: ${theme.font.sizes.large};
		`}
	`}
`;
