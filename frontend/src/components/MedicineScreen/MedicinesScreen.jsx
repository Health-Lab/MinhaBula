import { View, Pressable, Text } from "react-native";
import styles from './styles';
import { useState } from "react";
import { Feather } from '@expo/vector-icons';
import * as Speech from "expo-speech";

export function MedicinesScreen({title, value}){
	const [press, setPress] = useState(false)

	const handlePress = () => {
		press == true ? setPress(false) : setPress(true)
	}

	const handleTTS = (text) => {
		Speech.speak(text, {
			language: "pt-BR"
		});
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
					<View key={index}>
					<Text style={styles.textContent}>
						{item}
					</Text>
					<Pressable style={styles.tts}>
						<Feather name="volume-2" size={28} color="black" onPress={() => handleTTS(item)} />
					</Pressable>
					</View>
				))}
			</View>
			):(
				<>
				</>
			)}
		</View>
	)
};