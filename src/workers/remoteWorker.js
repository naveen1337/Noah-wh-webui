const requestServer = function (method, url, payload) {
	const token = localStorage.getItem('authtoken')
	return new Promise((resolve, reject) => {
		let options = {
			method: method,
			headers: {
				"Content-Type": "application/json",
				'Authorization':'Bearer '+token
			},
		};
		if (method === "POST") {
			options.body = JSON.stringify(payload);
		}
		// console.log(url)
		fetch(url, options)
			.then((serverResponse) => {
				if (serverResponse.ok) {
					serverResponse
						.json()
						.then((data) => {
							resolve(data);
						})
						.catch((err) => {
							reject("Parse Failed", err);
						});
				} else {
					reject("Invalid Response");
				}
			})
			.catch((err) => {
				reject("Failed Request", err);
			});
	});
}

export default requestServer