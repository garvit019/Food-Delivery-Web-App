import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure your CSS file is imported

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials!");
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
                    <h2>Signup</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onchange} id="exampleInputPassword1" placeholder="Address" />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </>
    )
}
