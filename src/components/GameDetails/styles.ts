import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
	${({ theme }) => css`
		margin: ${theme.spacings.xxlarge} 0;
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: ${theme.spacings.xsmall};
		margin-top: ${theme.spacings.small};

		${media.greaterThan("medium")`
			grid-template-columns: repeat(3, 1fr);
		`}

		${media.greaterThan("large")`
			grid-template-columns: repeat(6, 1fr);
		`}
	`}
`;

export const Label = styled.h3`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.light};
		color: ${theme.colors.white};
	`}
`;

export const Description = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};
	`}
`;
