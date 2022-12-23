import React, { useEffect } from 'react';
import AppRoutes from "./routes";
import { useAuthState } from "./atoms/auth";
import Login from "./pages/Login"

const App = () => {
  const [authState, setAuthState] = useAuthState();

  useEffect(() => {
    const data = localStorage.getItem("access_token");
    if (data) {
      setAuthState({loggedIn: true, ...data})
    }
  }, []);

  useEffect(() => {
    // if(!authState.loggedIn) {
    //   navigate('/login')
    // }
    console.log('APP_LOGGEDIN', authState.loggedIn)
  }, [authState.loggedIn]);


  if (authState.loggedIn) {
    return (
      <AppRoutes />
    );
  } else {
    return (
      <Login />
    )
  }
}

export default App;
