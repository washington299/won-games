import React, { InputHTMLAttributes, useState } from "react";

import * as S from "./styles";

export type TextFieldProps = {
	label?: string;
	labelFor?: string;
	onInput?: (value: string) => void;
	initialValue?: string;
	icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
	label,
	labelFor = "",
	onInput,
	initialValue = "",
	icon,
	...props
}: TextFieldProps) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setValue(newValue);

		!!onInput && onInput(newValue);
	};

	return (
		<S.Wrapper>
			{!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
			<S.InputWrapper>
				{!!icon && <S.Icon>{icon}</S.Icon>}
				<S.Input id={labelFor} type="text" value={value} onChange={onChange} {...props} />
			</S.InputWrapper>
		</S.Wrapper>
	);
};
