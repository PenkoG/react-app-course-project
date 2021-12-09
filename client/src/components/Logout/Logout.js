import { useNavigate } from "react-router-dom"
import { logout } from '../../services/authService';
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function Logout() {
    const navigate = useNavigate()
    const { onLogout } = useContext(UserContext);

    logout()
        .then(res => {
            onLogout();
            navigate('/');
        })

    return (
        <>
        </>
    )
}