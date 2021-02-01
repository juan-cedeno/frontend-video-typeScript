import { useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router"
import { StoreContext } from "../context/StoreContext"

export const PrivateRouter = (props : RouteProps) => {

     const {user} = useContext(StoreContext)     

     return (
         user 
         ? (
          <Route {...props}/>

         ): <Redirect to = '/auth'/>
               
     )
}
