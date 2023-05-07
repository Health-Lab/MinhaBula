import { View, Text } from "react-native";
import { ToBar } from "../../components/ToBar/ToBar";
import styles from "./styles";

export default function Favoritos(){
	return(
	<View style={styles.container}>
			<View>
			<Text style={styles.text}>
				Pagina Favoritos
			</Text>
		</View>
		<ToBar/>
	</View>
	);
}