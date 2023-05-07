import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import{useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import authService from "../../services/authService";
import styles from "./styles";

const singUpSchema = yup.object({
	email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
	password: yup.string().required("Informe a senha").min(6, "A senha deve ter pelo menos 6 caracteres")
})

export default function SignIn() {
  const navigation = useNavigation();
		const { singIn } = authService;
		const { control, handleSubmit, formState: { errors } } = useForm({
			defaultValues: {
					email: '',
					password: '',
			},
			resolver: yupResolver(singUpSchema)
		});

		const onSubmit = async(data) => {
			const res = await singIn(data);
			console.log("Usuário logado");
			navigation.navigate('Home')
		};

	return (
		<View style={styles.container}>
			<Animatable.View
					animation={"fadeInLeft"}
					delay={500}
					style={styles.containerHeader}
			>
					<Text style={styles.message}>Que bom ter você aqui!</Text>
			</Animatable.View>

			<Animatable.View animation={"fadeInUp"} style={styles.containerFrom}>

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

					<TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
							<Text style={styles.buttonText}>Acessar</Text>
					</TouchableOpacity>

					<TouchableOpacity
							onPress={() => navigation.navigate("CadastreSe")}
							style={styles.buttonRegister}
					>
							<Text style={styles.registerText}>
									Não possui uma conta? Cadastre-se
							</Text>
					</TouchableOpacity>
				</Animatable.View>
		</View>
	);
}