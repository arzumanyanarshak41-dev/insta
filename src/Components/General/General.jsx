import { Footer } from "../Footer/Footer"

export const General = ({ data, logedUser }) => {
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
                                <p>{user.username}</p>
                            </div>
                            <img src={user.userimg} className="pic" />
                            <div className="reaction">
                                <img src="https://www.clipartmax.com/png/full/357-3576861_image-instagram-heart-icon-svg.png" onClick={(e)=>{e.target.src="https://cdn-icons-png.freepik.com/256/138/138533.png?semt=ais_white_label"}} />
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