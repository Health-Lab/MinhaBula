import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFFFF",
	},
	headerContent: {
		padding: 10,
		flexDirection: 'row'
	},
	headerContentInfo: {
		padding: 10,
		alignItems: 'center',
		flexDirection: 'column'
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 10,
		borderWidth: 4,
		borderColor: "#dddddd",
		borderWidth: 1,
		backgroundColor: '#dcdcdc',
	},
	name: {
		fontSize: 22,
		color: "#000000",
		fontWeight: '60',
	},
	userInfo: {
		fontSize: 16,
		color: "#778899",
		fontWeight: '60',
	},
	body: {
		backgroundColor: "#778899",
		height: 520,
	},
	item: {
		flexDirection: 'row',
	},
	infoContent: {
		flex: 2,
		alignItems: 'flex-start',
		paddingLeft: 5
	},
	iconContent: {
		flex: 2,
		alignItems: 'flex-start',
		paddingRight: 0,
	},
	icon: {
		width: 30,
		height: 30,
		marginTop: 20,
	},
	info: {
		fontSize: 18,
		marginTop: 20,
		color: "#FFFFFF",
	},
	screen: {
		flex: 1
	}
});

export default styles