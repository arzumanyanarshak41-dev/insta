import { Footer } from "../Footer/Footer"

export const VewArchive = ({logedUser})=>{
    return(
        <div className="archive">
            <img src="https://buildmyplays.com/wp-content/uploads/2024/03/archive-a-post-on-Instagram.png" className="noarch" />
            <Footer logedUser={logedUser}/>
        </div>
    )
}