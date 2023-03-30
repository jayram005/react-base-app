import * as React from 'react'
import Auth from './auth'

let AuthContext = React.createContext(null)

export function AuthProvider({ children }) {
    let [user, setUser] = React.useState(JSON.parse(localStorage.getItem('LOGGED_IN_USER'))) // TODO: Use utlity function to communicate with local storage
  
    let signin = (newUser, passcode, callback) => {
      return Auth.signin(newUser, passcode, () => {
        setUser(newUser)
        callback()
      })
    };
  
    let signout = (callback) => {
      return Auth.signout(() => {
        setUser(null);
        callback()
      })
    }
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }

const useAuth = () => {
    const context = React.useContext(AuthContext)
  
    if (context === undefined) {
        throw new Error("useAuth must be used within AuthContext");
      }
    
      return context;    

}

export default useAuth
