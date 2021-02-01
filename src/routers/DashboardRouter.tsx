import {Route, Switch} from 'react-router-dom'
import { FormVideo } from '../components/FormVideo'
import { Header } from '../components/Header'
import { HomePage } from '../pages/HomePage'

export const DashboardRouter = () => {
     return (
               <div>
                    <Header/>
                    <Switch>
                         <Route exact path = '/' component = {HomePage}/>
                         <Route exact path = '/add-video' component = {FormVideo}></Route>
                    </Switch>
               </div>
     )
}
