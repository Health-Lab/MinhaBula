import { createContext } from "react";

const AuthContext = createContext({uid: "", favorites: []});

export default AuthContext;