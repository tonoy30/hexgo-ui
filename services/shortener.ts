import axios, { AxiosRequestConfig } from "axios";

const shortURL = async (
	body: string
): Promise<{ url: string; code: string; created_at: number }> => {
	let config = {
		method: "post",
		url: "http://localhost:8081/api/shortener",
		headers: {
			"Content-Type": "application/json",
		},
		data: JSON.stringify({
			url: body,
		}),
	} as AxiosRequestConfig;

	return await axios(config).then((res) => res.data);
};

export { shortURL };
