import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	icon?: JSX.Element;
	minimal?: boolean;
	as?: React.ElementType;
} & ButtonTypes;

export const Button = ({
	children,
	size = "medium",
	fullWidth = false,
	icon,
	minimal = false,
	...props
}: ButtonProps) => {
	return (
		<S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} minimal={minimal} {...props}>
			{!!icon && icon}
			{!!children && <span>{children}</span>}
		</S.Wrapper>
	);
};
