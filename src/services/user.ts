import axios from 'axios'
import { User } from '../interfaces/user';

class UserService {

     static url = process.env.REACT_APP_URL_API

     static async loginUser (email : string , password : string) {
          try {
               const {data} = await axios.post<User>(`${UserService.url}/login`, {email , password})
               return data

          } catch (error) {
               console.log(error);
               return undefined
          }
     }

}

export default UserService