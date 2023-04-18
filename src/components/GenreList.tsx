import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { v4 as uuidv4 } from "uuid";
import ListItemSkeleton from "./ListItemSkeleton";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return null;
	return (
		<List>
			{isLoading &&
				skeletons.map(() => (
					<ListItem key={uuidv4()}>
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

						<Text fontSize="lg"> {genre.name}</Text>
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
