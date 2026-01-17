import { useState } from "react"
import { Footer } from "../Footer/Footer"

export const Search = ({ logedUser, data }) => {
    const [schResult, setschResult] = useState([])
    function onsearch(e) {
        const usname = e.target.value
        setschResult(data.filter(el => {
            if (el.username.startsWith(usname)) {
                return el
            }
        }))
    }
    return (
        <div className="search">
            <input type="searcher" onChange={onsearch} placeholder="Search" />
            <div className="findbox">
                {schResult.map(el => {
                    return (
                        <div className="resbox">
                            <img src={el.userimg} className="usimg" />
                            <div className="n">
                                <p className="usname">{el.username}</p>
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