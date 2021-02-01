import { createContext } from "react";
import { User } from "../interfaces/user";

interface IContext {
     user : User | undefined,
     setUserLocalStarage : (user : User) => void,
     logOut : () => void


}

export const StoreContext = createContext<IContext>({} as IContext)
