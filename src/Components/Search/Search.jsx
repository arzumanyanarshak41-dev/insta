import { useState } from "react"
import { Footer } from "../Footer/Footer"
import { useNavigate } from "react-router-dom"

export const Search = ({ logedUser, data, setChoosedUser, setWho }) => {
    const [schResult, setschResult] = useState([])
    const navigate = useNavigate()
    function onsearch(e) {
        const usname = e.target.value
        setschResult(data.filter(el => {
            if (el.username.startsWith(usname) && el.username != "Saved Messages") {
                return el
            }
        }))
    }
    function toProfile(e) {
        const uname = e.target.textContent
        const prof = data.find((us) => us.username == uname || us.fullname == uname)
        setChoosedUser(prof)
        setWho(prof)
        navigate("/profile")
    }
    return (
        <div className="search">
            <input type="searcher" onChange={onsearch} placeholder="Search" />
            <div className="findbox">
                {schResult.map(el => {
                    return (
                        <div className="resbox">
                            <img src={el.userimg} className="usimg" />
                            <div className="n" onClick={toProfile}>
                                <p className="usname" >{el.username}</p>
                                <p>{el.fullname}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer logedUser={logedUser} />
        </div>
    )
}