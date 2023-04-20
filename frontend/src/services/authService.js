const apiUrl = "https://6a16-168-196-17-123.ngrok-free.app";

const login = async(user) => {
	try {
		console.log(apiUrl);
		const res = await fetch(`${apiUrl}`);
		
		const data = await res.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

const authService = {
	login
};

export default authService;