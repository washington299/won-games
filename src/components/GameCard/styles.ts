import styled, { css, DefaultTheme } from "styled-components";

export const Wrapper = styled.article`
	${() => css`
		width: 30rem;
		display: flex;
		flex-direction: column;
		position: relative;
	`}
`;

export const ImageBox = styled.div`
	width: 100%;
	height: 14rem;
	background: #f6f7f8;
	background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
	background-size: 80rem 14rem;
	animation: placeholderShimmer 1s linear infinite forwards;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@keyframes placeholderShimmer {
		0% {
			background-position: -40rem 0;
		}
		100% {
			background-position: 40rem 0;
		}
	}
`;

export const Content = styled.div`
	${({ theme }) => css`
		position: relative;
		padding: ${theme.spacings.xsmall};
		background-color: ${theme.colors.white};
	`}
`;

export const Info = styled.div`
	${({ theme }) => css`
		max-width: calc(100% - 2.6rem);
		margin-bottom: ${theme.spacings.xxsmall};
	`}
`;

export const Title = styled.h3`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
	`}
`;

export const Subtitle = styled.h4`
	${({ theme }) => css`
		color: ${theme.colors.gray};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.normal};
	`}
`;

export const FavIcon = styled.div`
	${({ theme }) => css`
		width: 2.4rem;
		height: 2.4rem;
		position: absolute;
		top: ${theme.spacings.xsmall};
		right: ${theme.spacings.xsmall};
		cursor: pointer;

		svg {
			color: ${theme.colors.primary};
		}
	`}
`;

export const BuyBox = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: flex-end;

		> * {
			margin-left: calc(${theme.spacings.xxsmall} / 2);
		}
	`}
`;

type PriceProps = {
	isPromotional?: boolean;
};

const priceModifier = {
	default: (theme: DefaultTheme) => css`
		background-color: ${theme.colors.secondary};
		color: ${theme.colors.white};
		border-radius: ${theme.border.radius};
	`,

	promotional: (theme: DefaultTheme) => css`
		color: ${theme.colors.gray};
		text-decoration: line-through;
	`,
};

export const Price = styled.div<PriceProps>`
	${({ theme, isPromotional }) => css`
		padding: calc(${theme.spacings.xxsmall} / 2) ${theme.spacings.xxsmall};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.bold};

		${isPromotional ? priceModifier.promotional(theme) : priceModifier.default(theme)};
	`}
`;
