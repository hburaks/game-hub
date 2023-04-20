import {
	Box,
	Card,
	CardBody,
	HStack,
	Heading,
	Image,
	Text
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack marginBottom={3} justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<HStack>
						<Emoji rating={game.rating_top} />
						<CriticScore score={game.metacritic} />
					</HStack>
				</HStack>
				<Heading fontSize="2xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
