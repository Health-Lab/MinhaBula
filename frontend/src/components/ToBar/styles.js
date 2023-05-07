import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container:{
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: "#373737",
		margin: -4,
		paddingVertical: 4,
		marginTop: "auto"
	},
	actions: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	active: {
		color: "#2d857e"
	},
	default: {
		color: "#fff"
	}
});

export default styles