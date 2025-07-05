import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/register', form);
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            navigate('/');
        } catch (err) {
            alert(err.response?.data?.message || "Error Registering");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input name="name" type="text" placeholder="Name" onChange={handleChange} required/>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required/>
            <input name="passowrd" type="password" placeholder="Password" onChange={handleChange} required/>
            <button type="submit">Register</button>
        </form>
    );
}