import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		flex: 1,
		padding: 4,
	},
	seachInput: {
		width: '100%',
		height: 10,
		paddingLeft: 8,
		fontSize: 16,
	},
	Input: {
		backgroundColor: '#373737',
		width: '85%',
		height: 50,
		borderRadius:10,
		padding: 15,
		fontSize: 18,
		color: '#fff'
	},
	SearchButton: {
		width: '15%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',	
	},
	SearchContainer: {
		marginTop: 10,
		flexDirection: "row",
		width: '100%',
		height: 50,
		alignItems: 'center',
		padding: 9,
		marginBottom: 8,
	}, 
})

export default styles