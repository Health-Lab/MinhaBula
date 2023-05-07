import { Text, View, Image } from 'react-native';
import { ToBar } from '../../components/ToBar/ToBar';
import styles from './styles';

export default function UserProfileView()  {
	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerContent}>
						<Image style={styles.avatar}	source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
						<View style={styles.headerContent}>
							<View style={styles.headerContentInfo}>
								<Text style={styles.name}>John Doe </Text>
								<Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
								<Text style={styles.userInfo}>Florida </Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.body}>
					<View style={styles.item}>
						<View style={styles.iconContent}>
							<Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }} />
						</View>
						<View style={styles.infoContent}>
							<Text style={styles.info}>Home</Text>
						</View>
						</View>

					<View style={styles.item}>
						<View style={styles.iconContent}>
							<Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/administrator-male.png' }} />
						</View>
						<View style={styles.infoContent}>
							<Text style={styles.info}>Configuração</Text>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.iconContent}>
							<Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/filled-like.png' }} />
						</View>
						<View style={styles.infoContent}>
							<Text style={styles.info}>News</Text>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.iconContent}>
							<Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/facebook-like.png' }} />
						</View>
						<View style={styles.infoContent}>
							<Text style={styles.info}>Shop</Text>
						</View>
					</View>
				</View>
			</View>
			<ToBar/>
		</View>
	);
}	


