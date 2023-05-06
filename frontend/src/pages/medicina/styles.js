import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container:{
		flex: 1,
		padding: 8,
		backgroundColor: "#FFFAFA"
	},
	medicineName: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 12,
		textAlign: "center"
	},
	headerContainer:{
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 12,
	}
});

export default styles;