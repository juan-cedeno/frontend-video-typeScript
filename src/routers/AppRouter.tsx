import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
export const AppRouter = () => {

     return (
          
          <Router>
               <Switch>
                    <PublicRouter path = '/auth' component = {AuthRouter}/>
                    <PrivateRouter path = '/' component = {DashboardRouter}/>
               </Switch>
          </Router>
     )
}
