import * as S from "./styles";

export type TextFieldProps = {
	label?: string;
	labelFor?: string;
};

export const TextField = ({ label, labelFor = "" }: TextFieldProps) => {
	return (
		<S.Wrapper>
			{!!label && <label htmlFor={labelFor}>{label}</label>}
			<input id={labelFor} type="text" />
		</S.Wrapper>
	);
};
