import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function NotFoundPage(){

    const location = useLocation()

    const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //        navigate('/') 
    //     }, 2000)
        
    // }, []) - ОТПРАВКА ДОМОЙ ЧЕРЕЗ 2 СЕКУНДЫ


    return(
        <div className="content fdc">
            <h2>ЭТОЙ СТРАНИЦЫ НЕТ ИЛИ ПОКА НЕ СУЩЕСТВУЕТ</h2>
            <img src="https://steamuserimages-a.akamaihd.net/ugc/1847049810689661073/FD72A23B311BCBBC5A1E7F2EA017F765A81DADDD/?imw=512&amp;imh=509&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"/>
            <button className="ErrButton" onClick={() => navigate('/')}>Yes, yes scout GO HOME.</button>
            <button className="ErrButton" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default NotFoundPage