import React, { useReducer, createContext } from "react";
import { initialState } from "./reducer";

// Create Context Object
export const AppContext = createContext([initialState, () => {}]);

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(props.reducer, props.initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};
