import { createContext, useState } from "react";

//the actual context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

//just a functional component that we need to create the Provider and use it in the app, wrapping components inside UserProvider to pass the context to children
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}