import { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer"
import { Link } from "react-router-dom"
export const Direct = ({ data, logedUser, setData, who, setChoosedUser }) => {
    const [pers, setpers] = useState(who)
    useEffect(() => {
        setData(
            data.map((el) => {
                if (el.username == pers.username) {
                    return { ...el, messages: pers.messages }
                } else {
                    return el
                }
            })
        )
    }, [pers])
    function getdirect(e) {
        const user = data.filter((el) => el.userimg == e.target.src)[0]
        setChoosedUser(user)
        setpers(user)
    }
    function sending(e) {
        e.preventDefault()
        const mess = e.target[0].value
        setpers({ ...pers, messages: [...pers.messages, mess] })
        const person = data.find((el) => el.username == pers.username)
        e.target.reset()
    }
    return (
        <div className="direct">
            <aside>
                {data.map((el) => {
                    if (el.username == logedUser.username && el.username != "Saved Messages") return
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
                    <Link to="/profile"><button>View Profile</button></Link>
                </div>
                <div className="bottom">
                    <div className="messBox">
                        {pers.messages.map((el) => {
                            return (
                                <h4>{el}</h4>
                            )
                        })}
                    </div>
                    <form className="massage" onSubmit={sending}>
                        <input type="text" placeholder="Message..." />
                        <button>send</button>
                    </form>
                    <Footer logedUser={logedUser} />
                </div>
            </div>
        </div>
    )
}