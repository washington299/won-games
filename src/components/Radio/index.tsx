import * as S from "./styles";

export type RadioProps = {
	label?: string;
	labelFor?: string;
};

export const Radio = ({ label = "", labelFor = "" }: RadioProps) => {
	return (
		<S.Wrapper>
			<input type="radio" id={labelFor} />
			{!!label && <label htmlFor={labelFor}>{label}</label>}
		</S.Wrapper>
	);
};
