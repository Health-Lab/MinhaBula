import { View, Pressable, Text } from "react-native";
import styles from './styles';
import { useState } from "react";

export function MedicinesScreen({title, value}){
	const [press, setPress] = useState(false)

	const handlePress = () => {
		press == true ? setPress(false) : setPress(true)
	}

	return (
		<View style={styles.buttonContainer}>
			<Pressable style={styles.button} android_ripple={{color: "#fff"}} onPress={handlePress}>
				<Text style={styles.buttonTitle}>
					{title}
				</Text>
			</Pressable>
			{press == true ? (
				<View style={styles.textContainer}>
				{value.map((item, index) => (
					<Text style={styles.textContent} key={index}>
						{item}
					</Text>
				))}
			</View>
			):(
				<>
				</>
			)}
		</View>
	)
};