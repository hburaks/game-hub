import {
	HStack,
	List,
	ListItem,
	Image,
	Text,
	Spinner,
	Button,
	Heading
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import ListItemSkeleton from "./ListItemSkeleton";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return null;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
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
								objectFit="cover"
								boxSize="32px"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
		</>
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
