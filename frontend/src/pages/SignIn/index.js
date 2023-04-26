import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import{useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import authService from "../../services/authService";

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerFrom: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#38a69d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
		erro: {
			alignItems: "center",
		},
		errorMessage: {
			color: "#FF0000",
			fontWeight: "bold"
		}
});
