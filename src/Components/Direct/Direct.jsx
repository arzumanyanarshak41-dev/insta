import { useState } from "react"
import { Footer } from "../Footer/Footer"

export const Direct = ({ data, logedUser }) => {
    const [pers, setpers] = useState(data[0])
    function getdirect(e) {
        const user = data.filter((el) => el.userimg == e.target.src)[0]
        setpers(user)
    }
    return (
        <div className="direct">
            <aside>
                {data.map((el) => {
                    return (
                        <img src={el.userimg} alt="" onClick={getdirect} />
                    )
                })}
            </aside>
            <div className="massageBox">
                <div className="usinfo">
                    <img src={pers.userimg} className="userimg" />
                    <h3>{pers.fullname}</h3>
                    <p>{pers.username}</p>
                </div>
                <div className="bottom">

                    <form className="massage">
                        <input type="text" placeholder="Message..."/>
                        <button>send</button>
                    </form>
                    <Footer logedUser={logedUser} />
                </div>
            </div>
        </div>
    )
}