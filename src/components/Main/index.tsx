import * as S from "./styles";

export type MainProps = {
	title: string;
	description: string;
};

export const Main = ({ title, description }: MainProps) => {
	return (
		<S.Wrapper>
			<h1>{title}</h1>
			<p>{description}</p>
		</S.Wrapper>
	);
};
