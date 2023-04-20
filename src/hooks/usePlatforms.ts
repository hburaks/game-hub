import useData from "./useData";
import platforms from "../data/platforms";
interface Platform {
	id: number;
	name: string;
	slug: string;
}
const usePlatforms = () => ({ data: platforms });
export default usePlatforms;

({ data: platforms });
