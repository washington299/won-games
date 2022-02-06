import { InputHTMLAttributes, useState } from "react";

import * as S from "./styles";

export type CheckboxProps = {
	label?: string;
	labelFor?: string;
	labelColor?: "white" | "black";
	onCheck?: (state: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
	label,
	labelFor = "",
	labelColor = "black",
	onCheck,
}: CheckboxProps) => {
	const [checked, setChecked] = useState(false);

	const onChange = () => {
		const status = !checked;
		setChecked(status);

		!!onCheck && onCheck(status);
	};

	return (
		<S.Wrapper>
			<S.Input type="checkbox" id={labelFor} onChange={onChange} />
			{!!label && (
				<S.Label htmlFor={labelFor} labelColor={labelColor}>
					{label}
				</S.Label>
			)}
		</S.Wrapper>
	);
};
