import { useState, createContext } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {

    const [selected, setselected] = useState("client");
    const [currState, setCurrState] = useState("signup");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [compony, setCompony] = useState("");
    const [subject, setSubject] = useState("")
    const [projectType, setProjectType] = useState("")
    const [message, setMessage] = useState("")


    const value = {
        selected,
        currState,
        name,
        email,
        password,
        compony,
        subject,
        projectType,
        message,
        setselected,
        setCurrState,
        setName,
        setEmail,
        setPassword,
        setCompony,
        setSubject,
        setProjectType,
        setMessage
    }

    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;