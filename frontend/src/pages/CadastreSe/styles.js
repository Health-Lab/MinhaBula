import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFFAFA',
		padding: 12
	},
	title:{
		fontSize: 12,
		marginBottom: 5,
		color:'#121212',
		fontWeight:'bold',
	},
	textInput:{
		fontSize: 13,
		marginEnd: 5,
		color:'#121212',
		alignSelf: 'flex-start',
		marginStart: 5,
		marginTop: 10 			
	},
	input:{
		width: '100%',
		height: 35,
		backgroundColor:'#DDD',
		borderRadius: 5,
		fontSize: 15,
		padding: 5,
		margin: 6
	},
	buttonCadastrar:{
		backgroundColor: '#38a69d',
		width:'100%',
		borderRadius: 4,
		paddingVertical: 8,
		marginTop: 14,
		justifyContent: 'center',
		alignItems: 'center',			
	},
	buttonText:{
		color:'#FFF',
		fontSize:18,
		fontWeight: 'bold',
	},
	bunttonVoltarLongin:{
		marginTop: 14,
		alignSelf: 'center'
	},
	loginVoltar:{
		color: '#a1a1a1'
	},
	containerHeader:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	message:{
		fontSize: 28,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 10
	},
	userList: {
		width: '100%',
	},
	scroll: {
		flex: 1
	}
})

export default styles