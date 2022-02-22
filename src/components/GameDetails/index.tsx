import { MediaMatch } from "components/MediaMatch";
import { Heading } from "components/Heading";

import * as S from "./styles";

export const GameDetails = () => {
	return (
		<S.Wrapper>
			<MediaMatch greaterThan="small">
				<Heading lineLeft lineColor="secondary">
					Game details
				</Heading>
			</MediaMatch>

			<S.Content>
				<div>
					<S.Label>Company</S.Label>
					<S.Description>Gearbox Software</S.Description>
				</div>

				<div>
					<S.Label>Release date</S.Label>
					<S.Description>Nov 16, 2019</S.Description>
				</div>

				<div>
					<S.Label>Platforms</S.Label>
				</div>

				<div>
					<S.Label>Editor</S.Label>
					<S.Description>2K</S.Description>
				</div>

				<div>
					<S.Label>Rating</S.Label>
					<S.Description>18+</S.Description>
				</div>

				<div>
					<S.Label>Genre</S.Label>
					<S.Description>Action / Adventure</S.Description>
				</div>
			</S.Content>
		</S.Wrapper>
	);
};
