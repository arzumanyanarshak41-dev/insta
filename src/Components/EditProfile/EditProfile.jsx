import { useState } from "react"
import { Footer } from "../Footer/Footer"
import { useNavigate } from "react-router-dom"

export const EditProfile = ({ logedUser, data, setData, setLogedUser }) => {
    const [file, setFile] = useState(logedUser.userimg)
    const [fname, setFname] = useState(logedUser.fullname)
    const [uname, setuname] = useState(logedUser.username)
    const [biotext, setBiotext] = useState(logedUser.bio)
    const navigate = useNavigate()
    function imgefunc(e) {
        const selectedFile = e.target.files[0]
        const render = new FileReader()
        render.onload = () => {
            setFile(render.result)
        }
        render.readAsDataURL(selectedFile)
    }
    function changeProf(e) {
        e.preventDefault()
        setData(data.map((el) => {
            if (el.username == logedUser.username) {
                return {
                    ...el,
                    userimg: file,
                    username: uname,
                    fullname: fname,
                    bio: biotext
                };
            }
            return el;
        }))
        setLogedUser({ ...logedUser, bio: biotext, fullname: fname, username: uname, userimg: file })
        navigate('/home')
        console.log(logedUser);
    }
    return (
        <form className="editprofile" onSubmit={changeProf}>
            <div className="imageedit">
                <img src={file} alt="" />
                <label htmlFor="forimg">Change Image</label>
                <input type="file" id="forimg" onChange={imgefunc} />
            </div>
            <div className="usnamebox">
                <label htmlFor="usname">Username</label>
                <input type="text" id="usname" placeholder="Enter new username" value={uname} onChange={(e) => setuname(e.target.value.trim())} />
            </div>
            <div className="fullnamebox">
                <label htmlFor="fname">Full Name</label>
                <input type="text" id="fname" placeholder="Full Name..." value={fname} onChange={(e) => setFname(e.target.value.trim())} />
            </div>
            <div className="biobox">
                <label htmlFor="bio">Bio</label>
                <textarea
                    id="bio"
                    placeholder="Add Bio..."
                    value={biotext}
                    onChange={e => setBiotext(e.target.value.trim())}
                />
            </div>
            <button>Save</button>
            <Footer logedUser={logedUser} />
        </form>
    )
}