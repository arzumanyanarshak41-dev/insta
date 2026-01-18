import { Link } from "react-router-dom"
export const Footer = ({logedUser})=>{
    return(
        <footer>
            <Link to="/general"><img src="https://cdn.creazilla.com/icons/3233593/instagram-icon-sm.png" alt="" /></Link>
            <Link to="/search"><img src="https://cdn-icons-png.flaticon.com/512/5948/5948534.png" alt="" /></Link>
            <Link to="/massages"><img src="https://www.svgrepo.com/show/380090/send-message-dm.svg" alt="" /></Link>
            <Link to="/home"><img src={logedUser.userimg} className="puimg" /></Link>
        </footer>
    )
}