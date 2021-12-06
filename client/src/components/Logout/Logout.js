import { useNavigate } from "react-router-dom"
import { logout } from '../../services/authService';

export default function Logout({ onLogout }) {
    const navigate = useNavigate()

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