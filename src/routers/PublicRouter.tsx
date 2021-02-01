import { useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { StoreContext } from '../context/StoreContext'

export const PublicRouter = (props : RouteProps) => {
     const {user} = useContext(StoreContext)
     return (
         user ? (
              <Redirect to = '/'/>
         ):
          <Route {...props}/>
     )
}
