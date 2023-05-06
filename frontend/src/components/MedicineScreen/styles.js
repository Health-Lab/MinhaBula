import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	buttonContainer:{
		flex: 1,
		backgroundColor: '#FFFAFA',
		marginVertical: 4,
	},
	button:{
		backgroundColor: '#2d857e',
		padding: 12,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},
	buttonTitle:{
		fontSize: 24
	},
	textContainer:{
		padding: 4
	},
	textContent:{
		fontSize: 20
	}
});

export default styles;