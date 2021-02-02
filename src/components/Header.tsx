import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { StoreContext } from "../context/StoreContext";
import '../css/header.css'

export const Header = () => {

     const {t} = useTranslation()
     const history = useHistory()
     const {logOut} = useContext(StoreContext)

     const handlenLogOut = () => {
          logOut()
     }
     const handlenAdd = () => {
          history.push('/add-video')
     }
  return (
    <div className = 'header'>
      <div className = 'icon'>
        <a href="https://github.com/juan-cedeno" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <h3 onClick = {() => history.push('/')}>juan cedeño</h3>
      </div>
      <div>
           <button onClick = {handlenAdd} className = 'btn'>{t('addVideo')}</button>
           <button onClick = {handlenLogOut} className = 'logout'>{t('logout')}</button>
      </div>
    </div>
  );
};
