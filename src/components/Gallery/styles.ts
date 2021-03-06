import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
	${({ theme }) => css`
		img {
			cursor: pointer;
		}

		${media.lessThan("huge")`
			overflow-x: hidden;
		`}

		.slick-track,
		.slick-list {
			display: flex;
		}

		.slick-slide > div {
			flex: 1 0 auto;
			height: 100%;
			margin: 0 ${theme.spacings.xxsmall};
		}

		.slick-list {
			margin: 0 -${theme.spacings.xxsmall};
		}

		${media.greaterThan("large")`
			.slick-slide > div {
				margin: 0 ${theme.spacings.xsmall};
			}

			.slick-list {
				margin: 0 -${theme.spacings.xsmall};
			}
		`}

		.slick-prev,
		.slick-next {
			width: 2.5rem;
			height: 2.5rem;
			display: block;
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			padding: 0;
			color: ${theme.colors.white};
			cursor: pointer;
		}

		.slick-prev {
			left: -${theme.spacings.xxlarge};
		}

		.slick-next {
			right: -${theme.spacings.xxlarge};
		}

		.slick-prev.slick-disabled,
		.slick-next.slick-disabled {
			visibility: hidden;
		}
	`}
`;

const modalModifier = {
	close: () => css`
		opacity: 0;
		pointer-events: none;
	`,

	open: () => css`
		opacity: 1;
	`,
};

type ModalProps = {
	isOpen: boolean;
};

export const Modal = styled.div<ModalProps>`
	${({ theme, isOpen }) => css`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.7);
		transition: opacity ${theme.transition.default};
		z-index: ${theme.layers.modal};

		${isOpen ? modalModifier.open() : modalModifier.close()};
	`}
`;

export const Close = styled.div`
	${({ theme }) => css`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: right;
		color: ${theme.colors.white};
		cursor: pointer;
	`}
`;

export const Content = styled.div`
	${() => css`
		max-width: min(120rem, 100%);
		max-height: 80rem;
	`}
`;
