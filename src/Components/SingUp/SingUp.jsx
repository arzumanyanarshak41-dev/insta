import { Link, useNavigate } from "react-router-dom"
import instagramName from "../InstagramName.png"
import usimg from "../Sample_User_Icon.png"
import { useState } from "react"
export const SignUp = ({ data, setData }) => {
    const navigate = useNavigate()
    const [file, setFile] = useState(usimg)
    function onSub(e) {
        e.preventDefault()
        const email = e.target[1].value.trim();
        const password = e.target[2].value.trim();
        const fullname = e.target[3].value.trim();
        const username = e.target[4].value.trim();
        if (!email || !password || !fullname || !username) return
        setData([...data, {
            email: email,
            password: password,
            fullname: fullname,
            username: username,
            userimg:file,
            posts:0,
            followers:Math.round(Math.random()*300)+150,
            following:Math.round(Math.random()*300)+50
        }])
        navigate("/")
        e.target.reset()
    }
    function imgefunc(e){
        const selectedFile = e.target.files[0]
        const render = new FileReader()
        render.onload=()=>{
            setFile(render.result)
        }
        render.readAsDataURL(selectedFile)
    }
    return (
        <div className="signup">
            <img src={instagramName} alt="" />
            <p className="firstP">Sign up to see photos and videos from your friends.</p>
            <form onSubmit={onSub}>
                <div className="imgbox">
                    <img src={file} alt="" />
                    <label htmlFor="forimg">choose image</label>
                    <input type="file" id="forimg" className="choseimg" onChange={imgefunc}/>
                </div>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Username" required />
                <button type="submit">Sign Up</button>
            </form>
            <div className="haveacc">
                <p>Have an Account?</p>
                <Link to="/">Log In</Link>
            </div>
        </div>
    )
}