import React, { InputHTMLAttributes, useState } from "react";

import * as S from "./styles";

export type TextFieldProps = {
	label?: string;
	labelFor?: string;
	onInput?: (value: string) => void;
	initialValue?: string;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
	label,
	labelFor = "",
	onInput,
	initialValue = "",
	icon,
	iconPosition = "left",
	disabled = false,
	error,
	...props
}: TextFieldProps) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setValue(newValue);

		!!onInput && onInput(newValue);
	};

	return (
		<S.Wrapper disabled={disabled} error={!!error}>
			{!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
			<S.InputWrapper>
				{!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
				<S.Input
					id={labelFor}
					type="text"
					value={value}
					disabled={disabled}
					onChange={onChange}
					iconPosition={iconPosition}
					{...props}
				/>
			</S.InputWrapper>
			{!!error && <S.Error>{error}</S.Error>}
		</S.Wrapper>
	);
};
