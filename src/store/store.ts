import {createContext} from "react";
import {AppContextType} from "./store.types.ts";

export const AppContext = createContext({} as Partial<AppContextType>);

