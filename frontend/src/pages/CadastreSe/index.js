import { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, View, ScrollView } from "react-native";
import{useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {Picker} from '@react-native-picker/picker'; //remove
import { SelectList } from "react-native-dropdown-select-list";
import { Masks } from 'react-native-mask-input';//remover
import authService from "../../services/authService";

const singUpSchema = yup.object({
	name: yup.string().required("Informe o nome"),
	email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
	password: yup.string().required("Informe a senha").min(6, "A senha deve ter pelo menos 6 caracteres"),
	passwordConfirm: yup.string().required("Informe a confirmação de senha").oneOf([yup.ref('password'), null], "A confirmação de senha não é igual"),
	contact: yup.string().required("Informe o número de contato").min(11, "O número precisa de pelo menos 11 digitos"),
	birthdayDate: yup.string().required("Informe a data de nascimento").matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, "Insira uma data no formato válido"),
});

const userTypes = [
	{key: "paciente", value: "Paciente"},
	{key: "medico", value: "Médico"},
	{key: "farmaceutico", value: "Farmacêutico"},
];

export default function CadastreSe(){
	const navigation = useNavigation();
	const [userType, setUserType] = useState("");
	const { singUp } = authService;
	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
				name: '',
				email: '',
				contact: '',
				birthdayDate: '',
				password: '',
				passwordConfirm: '',
		},
		resolver: yupResolver(singUpSchema)
	});

	const onSubmit = async(data) => {
		const newUser = {
			name: data.name,
			email: data.email,
			password: data.password,
			contact: data.contact,
			birthdayDate: data.birthdayDate,
			userType: userType
		};
		const res = await singUp(newUser);
		console.log(res);
	};


return(
	<SafeAreaView style={styles.container}>
		<ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
			<Animatable.View animation={"zoomIn"} delay={400} style={styles.containerHeader}>
					<Text style={styles.message}>Vamos começar?</Text>
					<Text style={styles.title}>Complete os dados e crie sua conta.</Text>
			</Animatable.View>
		
				<Controller
			control={control}
			name="name"
			render={({ field: {onChange, value} }) => (
				<>
					<Text style={styles.textInput}>Nome:</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChange}
						value={value}
						placeholder="Digite seu nome"
					/>
				</>
			)}
				/>
			
				<Controller
			control={control}
			name="email"
			render={({ field: {onChange, value} }) => (
				<>
					<Text style={styles.textInput}>Email:</Text>
					<TextInput
							style={styles.input}
							onChangeText={onChange}
							value={value}
							placeholder="minhabula@tes.com"
					/>
				</>
			)}
				/>
			
				<Controller
			control={control}
			name="contact"
			render={({ field: {onChange, value} }) => (
				<>
					<Text style={styles.textInput}>Contato:</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChange}
						value={value}
						placeholder="(99) 99999-9999"
						keyboardType="numeric"
					/>
				</>
			)}
				/>
			
				<Controller
			control={control}
			name="birthdayDate"
			render={({ field: {onChange, value} }) => (
				<>
					<Text style={styles.textInput}>Data de nacimento:</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChange}
						value={value}
						placeholder="00/00/0000"
						keyboardType="numeric"
					/>
				</>
			)}
				/>
			
				<Controller
			control={control}
			name="password"
			render={({ field: {onChange, value} }) => (
				<>
					<Text style={styles.textInput}>Senha:</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChange}
						value={value}
						placeholder="Digite sua senha"
						secureTextEntry
					/>
				</>
			)}
				/>
			
				<Controller
			control={control}
			name="passwordConfirm"
			render={({ field: {onChange, value} }) => (
				<>
					<Text style={styles.textInput}>Confirme sua senha:</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChange}
						value={value}
						placeholder="Digite novamente sua senha"
						secureTextEntry
					/>
				</>
			)}
				/>
			
				<View style={styles.userList}>
				<Text style={styles.textInput}>Tipo do usuário:</Text>
			<SelectList
				boxStyles={{marginTop: 6, backgroundColor: "#DDD"}}
				dropdownStyles={{backgroundColor: "#DDD"}}
				setSelected={setUserType}
				data={userTypes}
				placeholder={"Selecione o Tipo de Usuário"}
				defaultOption={{key: "paciente", value: "Paciente"}}
				search={false}
			/>
				</View>
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
		</ScrollView>
	</SafeAreaView>
);

}
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
       flex:1,
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