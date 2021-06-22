import remoteWorker from "../workers/remoteWorker";

// console.log(remoteWorker)

const BASE_URL = "http://localhost:5000";

const req_login = "/admin/login";
const req_getAllProducts = "/product";
const req_single_product = "/product/get/";

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

export const getProducts = async (payload) => {
	try {
		const response = await remoteWorker(
			"GET",
			BASE_URL + req_getAllProducts,
			payload
		);
		if (response.status === "success") {
			return response.data;
		} else {
			throw Error("All Products Get Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};

export const addProduct = async (payload) => {
	try {
		const response = await remoteWorker(
			"POST",
			BASE_URL + req_getAllProducts,
			payload
		);
		if (response.status === "success") {
			return response;
		} else {
			throw Error("Add Product Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};

export const getSingleProduct = async (id) => {
	// console.log('Payload',id.queryKey[1])
	try {
		const response = await remoteWorker(
			"GET",
			BASE_URL + req_single_product + id.queryKey[1],
			{}
		);
		if (response.status === "success") {
			return response.data;
		} else {
			throw Error("getSingleProduct Failed");
		}
	} catch (err) {
		console.log("Err", err);
		return false;
	}
};
