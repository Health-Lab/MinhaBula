import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2d857e',
		marginVertical: 10,
		borderRadius: 20,
		elevation: 4
	},
	name: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold"
	},
	text: {
		fontSize: 16
	},
	subContainer:{
		padding: 12
	},
	pressed: {
		backgroundColor: "#d8d8d8"
	}
});

export default styles;