import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.menu`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		padding: ${theme.spacings.small} 0;
		position: relative;
	`}
`;

export const LogoWrapper = styled.div`
	${media.lessThan("medium")`
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	`}
`;

export const IconWrapper = styled.div`
	${({ theme }) => css`
		width: 2.4rem;
		height: 2.4rem;
		color: ${theme.colors.white};
		cursor: pointer;
	`}
`;

export const MenuGroup = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-grow: 1;
		justify-content: flex-end;
		align-items: center;

		> div {
			margin-left: ${theme.spacings.xsmall};
		}
	`}
`;

export const MenuNav = styled.div`
	${({ theme }) => css`
		${media.greaterThan("medium")`
			margin-left: ${theme.spacings.small};
		`}
	`}
`;

export const MenuLink = styled.a`
	${({ theme }) => css`
		position: relative;
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.medium};
		margin: 0.3rem ${theme.spacings.small} 0;
		text-decoration: none;
		text-align: center;

		&:hover {
			&::after {
				content: "";
				position: absolute;
				display: block;
				height: 0.3rem;
				background-color: ${theme.colors.primary};
				animation: hoverAnimation 0.2s forwards;
			}

			@keyframes hoverAnimation {
				from {
					width: 0;
					left: 50%;
				}
				to {
					width: 100%;
					left: 0;
				}
			}
		}
	`}
`;

type MenuFullProps = {
	isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
	${({ theme, isOpen }) => css`
		opacity: ${isOpen ? 1 : 0};
		pointer-events: ${isOpen ? "all" : "none"};

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		overflow-y: hidden;
		background-color: ${theme.colors.white};
		transition: opacity 0.3s ease-in-out;
		z-index: ${theme.layers.menu};

		> svg {
			width: 2.4rem;
			height: 2.4rem;
			position: absolute;
			top: 0;
			right: 0;
			margin: ${theme.spacings.xsmall};
			cursor: pointer;
		}

		${MenuNav} {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;
		}

		${MenuLink} {
			color: ${theme.colors.black};
			font-size: ${theme.font.sizes.xlarge};
			font-weight: ${theme.font.bold};
			margin-bottom: ${theme.spacings.small};
			transform: ${isOpen ? "translateY(0rem)" : "translateY(3rem)"};
			transition: transform 0.3s ease-in-out;
		}

		${RegisterBox} {
			transform: ${isOpen ? "translateY(0rem)" : "translateY(3rem)"};
			transition: transform 0.3s ease-in-out;
		}
	`}
`;

export const RegisterBox = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

		> span {
			display: block;
			margin: ${theme.spacings.xxsmall} 0;
			font-size: ${theme.font.sizes.xsmall};
		}
	`}
`;

export const CreateAccount = styled.a`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		border-bottom: 0.2rem solid ${theme.colors.primary};
		text-decoration: none;
	`}
`;
