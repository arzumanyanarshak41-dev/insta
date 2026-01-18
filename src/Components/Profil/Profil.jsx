import { useState } from "react";
import { Footer } from "../Footer/Footer"
import { Link } from "react-router-dom";
export const Profil = ({ choosedUser, logedUser, setChoosedUser, setData, data, setWho }) => {
    const [classn, setClassn] = useState(false)
    function followpage(e) {
        setChoosedUser({ ...choosedUser, isFollowing: !choosedUser.isFollowing })
        setData(data.map(el => el.username == choosedUser.username ? { ...el, isFollowing: !el.isFollowing } : el))
    }
    return (
        <div className="profil">
            <div className="infobox">
                <div className="imgbox">
                    <img src={choosedUser.userimg} alt="" />
                    <p>@{choosedUser.username}</p>
                </div>
                <div className="nameinfo">
                    <h3>{choosedUser.username}</h3>
                    <p>{choosedUser.fullname}</p>
                    <div className="follow">
                        <p><span>{choosedUser.posts} </span>posts</p>
                        <p><span>{choosedUser.followers}</span> followers</p>
                        <p><span>{choosedUser.following} </span>following</p>
                    </div>
                </div>
            </div>
            <p className="biotext">{choosedUser.bio}</p>
            <div className="buts">
                <button onClick={followpage} className={choosedUser.isFollowing ? "" : "following"}>{choosedUser.isFollowing ? "following" : "follow"}</button>
                <Link to="/massages"><button onClick={() => { setWho(choosedUser) }}>Message</button></Link>
            </div>
            <div className="menubar">
                <img src="https://media.istockphoto.com/id/1448778725/vector/grid-icon-social-media-icon.jpg?s=612x612&w=0&k=20&c=ggWn8IG_4ScPaOx9lemRyajO_NBEdkeoA9xNzmYUgB0=" alt="" />
                <img src="https://images.seeklogo.com/logo-png/38/2/instagram-reels-logo-png_seeklogo-389137.png" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UIl6t92O07YmaQoeA7k_QkrJxZ836Lt2Uw&s" alt="" />
            </div>
            <div className="postsbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShghD3OySvPSVjhRdByE19OoM4F5ZsA8gw7A&s" alt="" />
            </div>
            <Footer logedUser={logedUser} />
        </div>
    )
}