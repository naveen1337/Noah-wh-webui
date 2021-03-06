import remoteWorker from "../workers/remoteWorker";

const BASE_URL = "https://noahwiredhealth.herokuapp.com";

const req_login = "/admin/login";

export const sendBeat = async (payload) => {
	try {
		const response = await remoteWorker(
			"GET",
			BASE_URL
		);
		if (response.status === "success") {
			return response
		} else {
			throw Error("Server Down");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};

export const login = async (payload) => {
	try {
		const response = await remoteWorker(
			"POST",
			BASE_URL + req_login,
			payload
		);
		if (response.status === "success") {
			localStorage.setItem("authtoken", response.data);
			return response.data;
		} else {
			throw Error("Login Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};

