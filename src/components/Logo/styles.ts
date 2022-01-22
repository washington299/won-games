import styled, { css } from "styled-components";

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
};

export const Wrapper = styled.div<LogoProps>`
	${({ theme, color, size }) => css`
		${!!size && wrapperModifier[size]};

		color: ${theme.colors[color!]};
	`}
`;
