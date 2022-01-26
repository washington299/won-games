import styled, { css } from "styled-components";
import media from "styled-media-query";

import { LogoProps } from ".";

const wrapperModifier = {
	normal: () => css`
		width: 11rem;
		height: 3.3rem;
	`,

	large: () => css`
		width: 20rem;
		height: 5.9rem;
	`,

	hideLabel: () => css`
		${media.lessThan("medium")`
			width: 5.8rem;
			height: 4.5rem;

			svg {
				height: 4.5rem;
				pointer-events: none;
			}

			.text {
				display: none;
			}
		`}
	`,
};

export const Wrapper = styled.div<LogoProps>`
	${({ theme, color, size, hideLabel }) => css`
		${!!size && wrapperModifier[size]};
		${!!hideLabel && wrapperModifier.hideLabel}

		color: ${theme.colors[color!]};
	`}
`;
