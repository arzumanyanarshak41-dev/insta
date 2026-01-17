import { useState } from "react";
import instagramName from "../InstagramName.png"
import { Link, useNavigate } from "react-router-dom"
export const LogIn = ({ data, setLogedUser }) => {
    const navigate = useNavigate()
    function onSub(e) {
        e.preventDefault();
        const email = e.target[0].value.trim()
        const pass = e.target[1].value.trim()
        const isin = data.find((user) =>
            (user.email == email || user.username == email) && user.password == pass
        )
        if (!isin) {
            return
        }
        setLogedUser(isin)
        e.target.reset()
        navigate("/home")
    }
    console.log(data);

    return (
        <div className="login">
            <div className="loginBox">
                <img src={instagramName} alt="" />
                <form onSubmit={onSub}>
                    <input type="text" placeholder="Email or Username" />
                    <input type="password" placeholder="Password" />
                    <button>Log In</button>
                </form>
                <hr />
                <h3>OR</h3>
                <hr />
                <p>Don`t have an Account?<Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    )
}