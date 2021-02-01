import ReactNotification from 'react-notifications-component'
import { useEffect, useState } from 'react';
import './App.css';
import { StoreContext } from './context/StoreContext';
import './i18n'
import { User } from './interfaces/user';
import { AppRouter } from './routers/AppRouter';

function App() {

  const [user, setUser] = useState<User | undefined>()
  const [checking, setChecking] = useState(true)

  
  const setUserLocalStarage = (user : User) => {
    localStorage.setItem('USER' , JSON.stringify(user))
    setUser(user)
  }
  
  
  useEffect(() => {
    
    const getUserLocalStorage = () => {
      const userInfo = localStorage.getItem('USER')
      if (userInfo) {
        const user = JSON.parse(userInfo)
        setUser(user)
        setChecking(false)
      }
    }
    getUserLocalStorage()
  }, [])

  const logOut = () => {
    localStorage.clear()
    setUser(undefined)
    setChecking(true)

  }


  return (
    <div>
      <StoreContext.Provider value = {{
        setUserLocalStarage,
        user,
        logOut,
      }}>
         <ReactNotification />
        <AppRouter/>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
