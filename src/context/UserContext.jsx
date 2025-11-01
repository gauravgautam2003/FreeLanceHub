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
    const [form, setForm] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");
    const [category, setCategory] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [budget, setBudget] = useState("");
    const [timeline, setTimeline] = useState("")
    const [userData, setUserData] = useState({});


    const value = {
        selected, setselected,
        userData, setUserData,
        projectTitle, setProjectTitle,
        category, setCategory,
        projectDesc, setProjectDesc,
        budget, setBudget,
        timeline, setTimeline,
        currState, setCurrState,
        name, setName,
        email, setEmail,
        password, setPassword,
        compony, setCompony,
        subject, setSubject,
        projectType, setProjectType,
        message, setMessage,
        form, setForm

    }

    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;