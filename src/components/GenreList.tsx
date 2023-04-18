import {
	HStack,
	List,
	ListItem,
	Image,
	Text,
	Spinner,
	Button
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import ListItemSkeleton from "./ListItemSkeleton";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return null;
	return (
		<List>
			{isLoading &&
				skeletons.map((skeleton) => (
					<ListItem key={skeleton}>
						<ListItemSkeleton />
					</ListItem>
				))}
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							onClick={() => onSelectGenre(genre)}
							fontSize="lg"
							variant="link"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;

// const { data, error, isLoading } = useGames();
// 	const skeletons = [1, 2, 3, 4, 5, 6];
// 	return (
// 		<>
// 			{error && <Text>{error}</Text>}
// 			<SimpleGrid
// 				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
// 				spacing={3}
// 				padding="10px"
// 			>
// 				{isLoading &&
// 					skeletons.map(() => (
// 						<GameCardContainer key={uuidv4()}>
// 							<GameCardSkeleton />
// 						</GameCardContainer>
// 					))}
// 				{data.map((game) => (
// 					<GameCardContainer key={uuidv4()}>
// 						<GameCard key={game.id} game={game} />
// 					</GameCardContainer>
// 				))}
// 			</SimpleGrid>
// 		</>
// 	);
