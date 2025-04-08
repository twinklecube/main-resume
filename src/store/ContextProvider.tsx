import {PropsWithChildren, useState} from "react";
import {AppContext} from "./store.ts";
import {initValue} from "./initValue.ts";

type Props = {} & PropsWithChildren;

const ContextProvider = ({children}: Props) => {
    const [value, setValue] = useState(initValue);

    return (
        <AppContext.Provider value={{value, setValue}}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
