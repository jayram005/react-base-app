const Auth = {
    isAuthenticated: false,
    signin(newUser, passcode, callback) {
      if (passcode === newUser.passcode) {
        Auth.isAuthenticated = true
        localStorage.setItem('LOGGED_IN_USER', JSON.stringify(newUser)) // TODO: Use utlity function to communicate with local storage
        callback()
      } else {
        Auth.isAuthenticated = false
      }
      return Auth.isAuthenticated
    },
    signout(callback) {
      Auth.isAuthenticated = false
      localStorage.removeItem('LOGGED_IN_USER')
      callback()
    }
  };
  
  export default Auth ;