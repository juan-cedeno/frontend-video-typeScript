import { Redirect, Route, Switch } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const AuthRouter = () => {
     return (
          <div>
               <Switch>
                    <Route exact path = '/auth/login' component = {LoginPage}></Route>
                    <Route exact path = '/auth/register' component = {RegisterPage}></Route>
                    <Redirect to = '/auth/login'/>
               </Switch>
          </div>
     )
}
