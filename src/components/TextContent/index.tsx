import { Heading } from "components/Heading";

import * as S from "./styles";

export type TextContentProps = {
	title?: string;
	content: string;
};

export const TextContent = ({ title, content }: TextContentProps) => {
	return (
		<S.Wrapper>
			{!!title && (
				<Heading lineLeft lineColor="secondary">
					Text content
				</Heading>
			)}

			<div dangerouslySetInnerHTML={{ __html: content }} />
		</S.Wrapper>
	);
};
