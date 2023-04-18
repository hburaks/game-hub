import { Card, SkeletonText } from "@chakra-ui/react";

const ListItemSkeleton = () => {
	return (
		<Card padding={5} marginY={5}>
			<SkeletonText height={10} />
		</Card>
	);
};

export default ListItemSkeleton;
