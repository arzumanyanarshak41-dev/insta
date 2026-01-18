import { Footer } from "../Footer/Footer"
import { Link } from "react-router-dom"
export const Home = ({ logedUser }) => {
    return (
        <div className="home">
            <div className="infobox">
                <div className="imgbox">
                    <img src={logedUser.userimg} alt="" />
                    <p>@{logedUser.username}</p>
                </div>
                <div className="nameinfo">
                    <h3>{logedUser.username}</h3>
                    <p>{logedUser.fullname}</p>
                    <div className="follow">
                        <p><span>{logedUser.posts}</span> posts</p>
                        <p><span>{logedUser.followers}</span> followers</p>
                        <p><span>{logedUser.following}</span> following</p>
                    </div>
                </div>
            </div>
            <p className="biotext">{logedUser.bio}</p>
            <div className="buts">
                <Link to="/editprofile"><button>Edit Profile</button></Link>
                <Link to="/archive"><button>View Archive</button></Link>
            </div>
            <div className="addaktual">
                <img src="https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png" alt="" />
                <p>New</p>
            </div>
            <div className="menubar">
                <img src="https://media.istockphoto.com/id/1448778725/vector/grid-icon-social-media-icon.jpg?s=612x612&w=0&k=20&c=ggWn8IG_4ScPaOx9lemRyajO_NBEdkeoA9xNzmYUgB0=" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UIl6t92O07YmaQoeA7k_QkrJxZ836Lt2Uw&s" alt="" />
            </div>
            <div className="postsbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShghD3OySvPSVjhRdByE19OoM4F5ZsA8gw7A&s" alt="" />
            </div>
            <Footer logedUser={logedUser} />
        </div>
    )
}