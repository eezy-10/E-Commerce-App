import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = axios.post('http://localhost:5000/api/users/login', form);
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            navigate('/');
        } catch (err) {
            alert(err.response?.data?.message || 'Login Failed');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required/>
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required/>
            <button type="submit">Login</button>
        </form>
    );
}