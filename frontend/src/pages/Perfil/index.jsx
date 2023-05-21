import { Text, View, Image } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import styles from './styles';
import AuthContext from "../../contexts/auth";
import userService from '../../services/userService';

export default function UserProfileView()  {
	const [user, setUser] = useState();
	const auth = useContext(AuthContext)
const { getUser } = userService

	useEffect(() => {
		async function fetchData(){
			const res = await getUser(auth.uid);
			setUser(res);
		}
		fetchData();
	}, [])


	return (
		<View style={styles.screen}>
			<View style={styles.container}>
			{user && (
				<>
					<View style={styles.header}>
					<View style={styles.headerContent}>
						<Image style={styles.avatar}	source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
						<View style={styles.headerContent}>
							<View style={styles.headerContentInfo}>
								<Text style={styles.name}>{user.name}</Text>
								<Text style={styles.userInfo}>{user.email}</Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.body}>
					<View style={styles.item}>
						<View style={styles.infoContent}>
							<Text style={styles.info}>Tipo de Usuário - {user.userType} </Text>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.infoContent}>
							<Text style={styles.info}>Data de Nascimento - {user.birthdayDate}</Text>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.infoContent}>
							<Text style={styles.info}>Telefone - {user.contact}</Text>
						</View>
					</View>
					</View>
				</>
			)}
			</View>
		</View>
	);
}	


