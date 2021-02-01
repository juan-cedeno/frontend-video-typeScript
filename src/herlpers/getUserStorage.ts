import { User } from "../interfaces/user"

export const getUserStorage = () => {
     const userInfo = localStorage.getItem('USER')
    if (userInfo) {
      const user = JSON.parse(userInfo)
      return user as User
    }
}
