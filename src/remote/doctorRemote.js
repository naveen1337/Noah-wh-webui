import remoteWorker from "../workers/remoteWorker";

const BASE_URL = "https://noahwiredhealth.herokuapp.com";

const req_get_all = "/doctors/";
const req_create = "/doctors/create";
const req_getById = "/doctors/";


export const getAllDoctorRemote = async (payload) => {
	try {
		const response = await remoteWorker(
			"GET",
			BASE_URL + req_get_all,
			payload
		);
		if (response.status === "success") {
			return response.data;
		} else {
			throw Error("getAllDoctorRemote Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};

export const createDoctorRemote = async (payload) => {
	try {
		const response = await remoteWorker(
			"POST",
			BASE_URL + req_create,
			payload
		);
		if (response.status === "success") {
			return response.data;
		} else {
			throw Error("createDoctor Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};

export const doctorByIdRemote = async (payload) => {
	try {
		const response = await remoteWorker(
			"GET",
			BASE_URL + `${req_getById}/${payload.queryKey[1]}`);
		if (response.status === "success") {
			return response.data;
		} else {
			throw Error("doctorByIdRemote Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};

export const deleteByIdRemote = async (id) => {
	try {
		const response = await remoteWorker(
			"DELETE",
			BASE_URL + `${req_getById}/${id}`);
		if (response.status === "success") {
			return response;
		} else {
			throw Error("deleteByIdRemote Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};


