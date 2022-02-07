import { InputHTMLAttributes } from "react";

import * as S from "./styles";

export type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
	label?: string;
	labelFor?: string;
	labelColor?: "white" | "black";
	value?: RadioValue;
	onCheck?: (value?: RadioValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({
	label = "",
	labelFor = "",
	labelColor = "black",
	value,
	onCheck,
	...props
}: RadioProps) => {
	const onChange = () => {
		!!onCheck && onCheck(value);
	};

	return (
		<S.Wrapper>
			<S.Input type="radio" id={labelFor} onChange={onChange} value={value} {...props} />
			{!!label && (
				<S.Label htmlFor={labelFor} labelColor={labelColor}>
					{label}
				</S.Label>
			)}
		</S.Wrapper>
	);
};
