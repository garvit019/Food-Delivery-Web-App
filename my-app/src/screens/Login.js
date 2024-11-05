import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // Ensure your CSS file is imported

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/api/loginuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            console.log(json);
            if (!json.success) {
                alert(json.errors || "Login failed. Please check your credentials.");
                return;
            }

            // If success, handle accordingly
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/"); // Redirect to home page or another page
        } catch (error) {
            console.error("An error occurred during login:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="bg-image"></div> {/* Background Image */}
            <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/createuser" className="m-3 btn btn-danger">I am a new user</Link>
                </form>
            </div>
        </>
    )
}
