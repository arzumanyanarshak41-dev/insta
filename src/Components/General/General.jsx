import { useNavigate } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { useState } from "react"

export const General = ({ data, logedUser, setChoosedUser, setWho }) => {
    const [liked, setLiked] = useState(false)
    const navigate = useNavigate()
    function toProfile(e) {
        const uname = e.target.textContent
        const prof = data.find((us) => us.username == uname)
        setChoosedUser(prof)
        setWho(prof)
        navigate("/profile")
    }
    return (
        <div className="general">
            <div className="storys">
                {data.map((user) => {
                    return (
                        <div className="story">
                            <img src={user.userimg} alt="" />
                            <p>{user.username}</p>
                        </div>
                    )
                })}
            </div>
            <div className="publications">
                {data.map((user) => {
                    return (
                        <div className="publicBox">
                            <div className="profinfo">
                                <img src={user.userimg} className="userlogo" />
                                <p onClick={toProfile}>{user.username}</p>
                            </div>
                            {user.username == "admin" ?
                                <img src="https://www.getfoundquick.com/wp-content/uploads/2018/04/instagram-3157976_1280.jpg" className="pic" onDoubleClick={() => setLiked(true)} /> :
                                <img src={user.userimg} className="pic" onDoubleClick={() => setLiked(true)} />}
                            <div className="reaction">
                                <img src={liked ? "https://cdn-icons-png.freepik.com/256/138/138533.png?semt=ais_white_label" : "https://www.clipartmax.com/png/full/357-3576861_image-instagram-heart-icon-svg.png"} onClick={() => setLiked(!liked)} />
                                <img src="https://www.pikpng.com/pngl/b/44-445926_circular-speech-bubble-outline-comments-comment-icon-instagram.png" alt="" />
                                <img src="https://cdn-icons-png.freepik.com/256/8637/8637835.png?semt=ais_white_label" alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer logedUser={logedUser} />
        </div>
    )
}