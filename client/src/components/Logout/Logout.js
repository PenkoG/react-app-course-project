import { useNavigate } from "react-router-dom"


export default function Logout({ onLogout }) {
    const navigate = useNavigate()
    onLogout();
    navigate('/');

    return (
        <>
        </>
    )
}