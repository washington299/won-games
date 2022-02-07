import * as S from "./styles";

export type RadioProps = {
	label?: string;
	labelFor?: string;
	labelColor?: "white" | "black";
};

export const Radio = ({ label = "", labelFor = "", labelColor = "black" }: RadioProps) => {
	return (
		<S.Wrapper>
			<S.Input type="radio" id={labelFor} />
			{!!label && (
				<S.Label htmlFor={labelFor} labelColor={labelColor}>
					{label}
				</S.Label>
			)}
		</S.Wrapper>
	);
};
