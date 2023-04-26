import { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert } from "react-native";

import{useForm, Controller} from 'react-hook-form';

import {useNavigation} from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'
import authService from "../../services/authService";

export default function CadastreSe(){
	const navigation = useNavigation();
	const { singUp } = authService;
	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
				name: '',
				email: '',
				contact: '',
				birthdayDate: '',
				password: '',
				passwordConfirm: '',
				userType: ''
		}
	});

	const onSubmit = async(data) => {
		console.log(data);
	};



	async function handleCadastro(){
		const data = { nome, contato, email, dataNacimento, password, confirmaPassword };
		const res = await singUp(data);
		console.log(data);
	};

return(
	<SafeAreaView style={styles.container}>
		<Animatable.View animation={"zoomIn"} delay={400} style={styles.containerHeader}>
			<Text style={styles.message}>Vamos começar?</Text>
			<Text style={styles.title}>Complete os dados e crie sua conta.</Text>
		</Animatable.View>

	<Controller
		control={control}
		rules={{
			required: true
		}}
		render={({ field: {onChange, onBlur, value} }) => (
			<>
				<Text style={styles.textInput}>Nome:</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChange}
					value={value}
					onBlur={onBlur}
					placeholder="Digite seu nome"
				/>
			</>
		)}
		name="name"
	/>
	{errors.name && <Text>This is required.</Text>}

	<Controller 
		control={control}
		rules={{
			required: true
		}}
		render={({ field: {onChange, onBlur, value} }) => (
			<>
				<Text style={styles.textInput}>Email:</Text>
				<TextInput
						style={styles.input}
						onChangeText={onChange}
						onBlur={onBlur}
						value={value}
						placeholder="minhabula@tes.com"
				/>
			</>
		)}
		name="email"
	/>

	{errors.email && <Text>This is required.</Text>}
		
	<Controller 
		control={control}
		rules={{
			required: true
		}}
		render={({ field: {onChange, onBlur, value} }) => (
			<>
				<Text style={styles.textInput}>Contato:</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChange}
					onBlur={onBlur}
					value={value}
					placeholder="(99) 99999-9999"
					keyboardType="numeric"
				/> 
			</>
		)}
		name="contact"
	/>

	{errors.contact && <Text>This is required.</Text>}

	<Controller 
		control={control}
		rules={{
			required: true
		}}
		render={({ field: {onChange, onBlur, value} }) => (
			<>
				<Text style={styles.textInput}>Data de nacimento:</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChange}
					onBlur={onBlur}
					value={value}
					placeholder="00/00/0000"
					keyboardType="numeric"
				/>
			</>
		)}
		name="birthdayDate"
	/>

	{errors.birthdayDate && <Text>This is required.</Text>}

	<Controller 
		control={control}
		rules={{
			required: true
		}}
		render={({ field: {onChange, onBlur, value} }) => (
			<>
				<Text style={styles.textInput}>Senha:</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChange}
					onBlur={onBlur}
					value={value}
					placeholder="Digite sua senha"
					secureTextEntry
				/>
			</>
		)}
		name="password"
	/>

	{errors.password && <Text>This is required.</Text>}

	<Controller 
		control={control}
		rules={{
			required: true
		}}
		render={({ field: {onChange, onBlur, value} }) => (
			<>
				<Text style={styles.textInput}>Confirme sua senha:</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChange}
					onBlur={onBlur}
					value={value}
					placeholder="Digite novamente sua senha"
					secureTextEntry
				/>
			</>
		)}
		name="passwordConfirm"
	/>

	{errors.passwordConfirm && <Text>This is required.</Text>}

	<Controller 
		control={control}
		rules={{
			required: true
		}}
		render={({ field: {onChange, onBlur, value} }) => (
			<>
				<Text style={styles.textInput}>Tipo de Usuário</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChange}
					onBlur={onBlur}
					value={value}
				/>
			</>
		)}
		name="userType"
	/>

	{errors.userType && <Text>This is required.</Text>}

		<TouchableOpacity 
		style={styles.buttonCadastrar}
		onPress={handleSubmit(onSubmit)}>
			<Text style={styles.buttonText}>Finalizar cadastro</Text>
		</TouchableOpacity>

		<TouchableOpacity 
		onPress={()=> navigation.navigate('SignIn')}
		style={styles.bunttonVoltarLongin}>
			<Text style={styles.loginVoltar}>Já possui uma conta? Fazer Login</Text>
		</TouchableOpacity>
	</SafeAreaView>
);

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFAFA',
        padding: 12
       
    },
    title:{
        fontSize: 12,
        marginBottom: 5,
        color:'#121212',
        fontWeight:'bold',
        alignSelf: 'flex-start',
        marginStart: 18
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
    containerLogo:{
       flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    }
})