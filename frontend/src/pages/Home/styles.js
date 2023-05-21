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
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
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
	}, 
	results: {
		backgroundColor: '#373737',
		marginHorizontal: 9,
		marginRight: 64,
		borderBottomRightRadius: 8,
		borderBottomLeftRadius: 8,
	},
	terms: {
		color: "#fff",
		borderBottomWidth: 2,
		borderBottomColor: "#FFF",
		marginVertical: 4,
		paddingBottom: 4
	},
	hidden:{
		display: "none"
	},
	outFocus: {
		backgroundColor: '#373737',
		width: '85%',
		height: 50,
		borderRadius: 8,
		padding: 15,
		fontSize: 18,
		color: '#fff'
	}
})

export default styles