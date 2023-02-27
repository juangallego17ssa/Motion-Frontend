import { Navigate } from "react-router-dom"

const RouteProtected = (props) =>{


const token = localStorage.getItem("token")

return(
    token ? props.route : <Navigate to="/login"/>  
)

}

export default RouteProtected