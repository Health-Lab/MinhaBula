# MinhaBula - BackEnd

## Este projeto tem como finalidade desenvolver um aplicativo para ajudar na consulta de bula de remedios aprovdos pela ANVISA.

Este projeto foi desenvolvido utilizando [React-Native](https://reactnative.dev/) e [Expo](https://expo.dev/) no frontend e [Node.js](https://nodejs.org/en) com [Typescript](https://www.typescriptlang.org/) no backend com [Express](https://expressjs.com/), utiliza também o banco de dados [Firebase](https://firebase.google.com/?hl=pt).

### Rodando o Back End

```bash
# Para rodar o back end 
$ git clone <https://github.com/Health-Lab/MinhaBula.git>

# Na pasta do repositório, digite no terminal
$ yarn install

# Acesse a pasta backend e rode no terminal
$ yarn dev

# O servidor roda na porta 8080 -  acesse <http://localhost:8080> 
```

### Rodando o FrontEnd

Para rodar o FrontEnd será necessário o [Android-Studio] 

```bash
# Para rodar o front end 
$ git clone <https://github.com/Health-Lab/MinhaBula.git>

# Na pasta do repositório, digite no terminal
$ yarn install

# Acesse a pasta frontend e rode no terminal
$ yarn expo start 
```

# Realizando chamadas para a API do back end utilizando o Front End.

Será necessário baixar um  programa para transforma a conexão HTTP do seu localhost em uma conexão encriptada, escolhi optar pelo [ngrok](https://ngrok.com/) é só criar a conta no site deles e seguir os passos para conseguir utilizar.

## Configurando a conexxão HTTPS no Expo

Para configurar a conexão da sua máquina: 
* Acesse a pasta frontend do projeto
* Na pasta **src** procure pela pasta **services**
* Na pasta services altere o valor da constante **apiUrl** pelo valor fornecido pelo ngrock.

# Endpoints da API
* Rotas para o usuário
 `http://localhost/api/auth/singup` \n 
	`http://localhost/api/auth/singup`
	Metodo: POST


* Rotas para medicamentos
	`http://localhost/api/medicine/:nome-do-medicamento`\n 
	`http://localhost/api/auth/insert`
	Metodo: GET