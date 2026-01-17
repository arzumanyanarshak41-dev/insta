import { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer"

export const Direct = ({ data, logedUser }) => {
    const [pers, setpers] = useState(data[0])
    const [massage, setmassage] = useState([])
    useEffect(()=>{
        setmassage([])
    },[pers])
    function getdirect(e) {
        const user = data.filter((el) => el.userimg == e.target.src)[0]
        setpers(user)
    }
    function sending(e) {
        e.preventDefault()
        const mess = e.target[0].value
        setmassage([...massage, mess])
        e.target.reset()
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
                    <div className="messBox">
                        {massage.map((el) => {
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