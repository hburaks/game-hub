import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "c522f6bd7fa148908636af246db8cebc"
	}
});
